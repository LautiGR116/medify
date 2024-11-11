import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { MdiLightMinusCircle, MdiLightPlusCircle } from '../svg/timePicker/TimePicker';
import dayjs from 'dayjs';

const IconTimePicker = () => {
  const [alarm, setAlarm] = useState<Date[]>([]);

  function addAlarm() {
    setAlarm([...alarm, new Date()]);
  }

  function deleteLastAlarm() {
    if (alarm.length === 0) return;
    setAlarm(alarm.slice(0, -1));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-center gap-2">
        {alarm.map((a, i) => (
          <MobileTimePicker
            key={i}
            value={dayjs(a)}
            onChange={(date) => {
              const newAlarm = [...alarm];
              if (date) {
                newAlarm[i] = date.toDate();
              }
              setAlarm(newAlarm);
            }}
            sx={{
              width: '100px',
              height: '32px',
              '& .MuiInputBase-input': {
                color: '#1B2F3D',
                fontSize: '20px',
                fontWeight: '400', 
                fontFamily: 'SF Pro Display',
                padding: '0 2.2px',
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#CCE5E2',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  
                  width: '100px',
                  height: '32px',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#CCE5E2',
                  },
                  '& .MuiInputBase-input': {
                    color: '#1B2F3D',
                    fontSize: '20px',
                    fontWeight: '400', 
                    fontFamily: 'SF Pro Display',
                    padding: '0 1px',
                  },
                }}
              />
            )}
          />
        ))}
        <div className="pr-2 bg-inherit rounded-full focus:border-none outline-none" onClick={addAlarm}>
          <MdiLightPlusCircle className="size-6 text-scale-1000" />
        </div>
        <div className="bg-inherit rounded-full focus:border-none outline-none" onClick={deleteLastAlarm}>
          <MdiLightMinusCircle className="size-6 text-scale-1000" />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default IconTimePicker;
