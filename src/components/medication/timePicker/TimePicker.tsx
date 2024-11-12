import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers';
import {MynauiPlusCircle} from '../../svg/timePicker/TimePicker';
import { TimeStamp } from './TimeStamp';
import { IconButton, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const IconTimePicker = () => {
    const [alarm, setAlarm] = useState<Date[]>([]);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleAddTime = (newValue: Dayjs | null) => {
        if (newValue) {
            setAlarm([...alarm, newValue.toDate()]);
            setSelectedTime(null);
            setShowTimePicker(false);
        }
    };

    const deleteAlarm = (index: number) => {
        const newAlarm = [...alarm];
        newAlarm.splice(index, 1);
        setAlarm(newAlarm);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex items-center gap-6">
                {alarm.map((a, i) => (
                    <TimeStamp
                        key={i}
                        time={dayjs(a).format('h:mm A')}
                        onClick={() => deleteAlarm(i)}
                    />
                ))}
                <div>
                    <IconButton onClick={() => setShowTimePicker(true)} className="focus:outline-none">
                        <MynauiPlusCircle className="size-6 text-scale-1000" />
                    </IconButton>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileTimePicker
                            open={showTimePicker}
                            onClose={() => setShowTimePicker(false)}
                            ampm
                            value={selectedTime}
                            onChange={handleAddTime}
                            // Hace que el picker sea invisible visualmente
                            sx={{
                            visibility: 'hidden', // Hace que el componente no sea vi   sible
                            position: 'absolute', // Saca el componente del flujo de diseño principal
                            left: '-9999px', // Lo coloca fuera de la pantalla
                            }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default IconTimePicker;
