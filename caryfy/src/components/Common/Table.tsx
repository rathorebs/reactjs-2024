import { useEffect, useState } from "react";
import icons from "../../assets/icons.svg";
import icons1 from "../../assets/icons1.svg";
import icons2 from "../../assets/icons2.svg";
import icons3 from "../../assets/icons3.svg";
import { ApolloError } from "@apollo/client";
import { showError, showSuccess } from "./ToastNotification";

interface TableProps<T> {
  columns: any;
  initialData: any;
  showCheckboxColumn?: boolean;
  showActionColumn?: boolean;
  deleteCallType?: any;
  updateCalltype?: any;
  userInfo?: any;
  tableType?: any;
  callTypeData?: any
  refetchCallType?: any
}

const Table = <T extends {}>({
  columns,
  initialData,
  showCheckboxColumn,
  showActionColumn,
  deleteCallType,
  updateCalltype,
  userInfo,
  tableType,
  callTypeData,
  refetchCallType
}: TableProps<T>) => {
  const [rows, setRows] = useState<any>(initialData);
  const [editRows, setEditRows] = useState<any>({});
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    setRows(initialData);
  }, [initialData]);
  function handleEdit(index: number): void {
    setEditRows((prev: any) => ({ ...prev, [index]: { ...rows[index] } }));
  }

  function handleSave(index: number, id: any): void {
    const resultCallTypeData = callTypeData.find((ite: any) => ite.calltypeid == id)
    const result = editRows[index];
    const callTypeId = Number(id);
    const payRate = Number(result["Pay Rate"].replace("$", ""));
    const billRate = Number(result["Bill Rate"].replace("$", ""));
    const hours = resultCallTypeData.hours
    const minutes = resultCallTypeData.minutes

    updateCalltype({
      variables: {
        calltypecode: result["Call Type"],
        calltypeprocedurecode: result["Procedure Code"],
        calltypedescription: result["Description"],
        shiftRate: billRate,
        payrate: payRate,
        shifttype: result["Shift Type"],
        shiftTypeRatesInput: result["Shift Type"],
        agencyId: Number(userInfo?.agency?.id),
        calltypeid: callTypeId,
        hours: hours,
        minutes: minutes,
        programId: 0,
      },
    })
      .then((response: any) => {
        setRows((prev: any) =>
          prev.map((row: any, i: any) =>
            i === index ? (editRows[index] as T) : row
          )
        );
        showSuccess("Call type data updated")
        setEditRows((prev: any) => {
          const newEditRows = { ...prev };
          delete newEditRows[index];
          return newEditRows;
        });
      })
      .catch((error: any) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message);
          showError(error.message)
        } else {
          console.error(`error message: ${error}`);
          showError(error)

        }
      });
  }

  function handleDiscard(index: number): void {
    setEditRows((prev: any) => {
      const newEditRows = { ...prev };
      delete newEditRows[index];
      return newEditRows;
    });
  }

  function handleDelete(index: number, id: string): void {
    deleteCallType({
      variables: {
        calltypeid: id,
      },
    })
      .then((response: any) => {
        console.log(response,'response')
        if (response.data.delete_calltype.status_code === 200) {
          if (rows.length === 1) {
            refetchCallType({
              variables: {
                agencyId: Number(userInfo?.agency?.id),
              },
            });
          }
          setRows(rows.filter((_: any, i: any) => i !== index));
          showSuccess("Call Type deleted sucessful")
        }
      })
      .catch((error: any) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message);
        } else {
          console.error(`error message: ${error}`);
        }
      });
  }

  function handleChange(index: number, column: keyof T, value: any): void {
    setEditRows((prev: any) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [column]: value,
      },
    }));
  }

  function handleSelectRow(index: number): void {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  function handleSelectAll(): void {
    setSelectAll(!selectAll);
    setSelectedRows(!selectAll ? rows.map((_: any, index: any) => index) : []);
  }

  return (
    <div id="onboarding-tbl">
      <table
        id="cts-table"
        className="self-stretch rounded-lg bg-text-text-tertiary border-[1px] border-solid border-surface-border table-responsive border-collapse overflow-x-scroll"
      >
        <thead className="bg-surface-bg-secondary">
          <tr className="p-4 gap-[20px] mq950:flex-wrap">
            {showCheckboxColumn && (
              <th className="p-4 text-center">
                <input
                  className="m-0 h-4 w-4"
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns?.map((column: any) => {
              if (column !== "calltypeid") {
                return (
                  <th className="p-4 text-left" key={String(column)}>
                    {column}
                  </th>
                )
              }
            })}
            {showActionColumn && <th className="p-4 text-left">Action</th>}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: any, rowIndex: any) => {
            const isEditing = editRows[rowIndex] !== undefined;
            const isSelected = selectedRows.includes(rowIndex);
            return (
              <tr className="p-4 gap-[20px] mq950:flex-wrap" key={rowIndex} data-attr={row['calltypeid']}>
                {showCheckboxColumn && (
                  <td className="p-4">
                    <input
                      className="m-0 h-4 w-4"
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectRow(rowIndex)}
                    />
                  </td>
                )}
                {columns?.map((column: any) => {
                  if (column !== "calltypeid") {
                    return (
                      <td className="p-4" key={String(column)} >
                        <input
                          type="text"
                          value={
                            isEditing
                              ? (editRows[rowIndex][column] as any)
                              : (row[column] as any)
                          }
                          onChange={(e) =>
                            handleChange(rowIndex, column, e.target.value)
                          }
                          disabled={!isEditing}
                          className="w-full bg-transparent"
                        />
                      </td>
                    )
                  }

                })}
                {showActionColumn && (
                  <td className="p-4 flex items-center">
                    {isEditing ? (
                      <>
                        <img
                          className="cursor-pointer h-4 w-6 inline-block"
                          loading="lazy"
                          alt="Save"
                          src={icons}
                          onClick={() => handleSave(rowIndex, row.calltypeid)}
                        />
                        <img
                          className="cursor-pointer h-4 w-6 inline-block"
                          loading="lazy"
                          alt="Discard"
                          src={icons1}
                          onClick={() => handleDiscard(rowIndex)}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="cursor-pointer h-4 w-6 inline-block"
                          loading="lazy"
                          alt="Edit"
                          src={icons2}
                          onClick={() => handleEdit(rowIndex)}
                        />
                        <img
                          className="cursor-pointer h-4 w-6 inline-block"
                          loading="lazy"
                          alt="Delete"
                          src={icons3}
                          onClick={() => handleDelete(rowIndex, row.calltypeid)}
                        />
                      </>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
