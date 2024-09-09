import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

interface GooglePlacesAutocompleteProps {
    onSelectAddress: (address: {
        address: string;
        addressline: string;
        city: string;
        zip: string;
    }) => void;
    initialAddress?: {
        address: string;
        addressLine: string;
        city: string;
        zip: string;
    };
}

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({ onSelectAddress, initialAddress }) => {
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (initialAddress) {
            // Set initial input value based on initialAddress if available
            setInputValue(`${initialAddress.address} ${initialAddress.addressLine} ${initialAddress.city} ${initialAddress.zip}`);
        }
    }, [initialAddress]);

    function onLoad(autocomplete: google.maps.places.Autocomplete) {
        setAutocomplete(autocomplete);
    }

    function onPlaceChanged() {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (place && place.address_components) {
                const addressComponents = place.address_components;
                const formattedAddress = place.formatted_address || '';

                // Extracting relevant address components
                let address = '';
                let addressline = ''
                let city = '';
                let zip = '';

                let hasStreetAddress = false;
                let hasSubLocality = false

                addressComponents.forEach((component) => {
                    if (component.types.includes('street_number') || component.types.includes('route')) {
                        address += component.long_name + ' ';
                        hasStreetAddress = true;
                    }
                    if (component.types.includes('neighborhood') || component.types.includes('sublocality_level_1') || component.types.includes('sublocality')) {
                        addressline = component.long_name + ' ';
                        hasSubLocality = true
                    }
                    if (component.types.includes('locality')) {
                        city = component.long_name;
                    }
                    if (component.types.includes('postal_code')) {
                        zip = component.long_name;
                    }
                });

                // If no street address, use locality as address
                if (!hasStreetAddress && city !== '') {
                    address = city;
                }

                // If no sublocality address, use locality as address
                if (!hasSubLocality && city !== '') {
                    addressline = city;
                }

                // Prepare the data in required format
                const formattedData = {
                    address: address.trim(),
                    addressline: addressline.trim(),
                    city,
                    zip,
                };

                onSelectAddress(formattedData);
                setInputValue(`${formattedData.address} ${formattedData.addressline} ${formattedData.city} ${formattedData.zip}`);
            }
        }
    };

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 flex flex-row items-center justify-start font-body-reg text-sm text-text-text-secondary"
                type="text"
                placeholder="Enter your address"
                value={inputValue}
                onChange={handleInputChange}
            />
        </Autocomplete>
    );
};

export default GooglePlacesAutocomplete;
