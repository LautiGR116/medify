import * as React from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { Paper } from '@mui/material';
import Button from '../../common/button/Button';

interface CalendarProps {
  onChange: (date: Dayjs | null) => void; // Callback cuando se selecciona una fecha
  open: boolean; // Condición que determina si el DatePicker está visible
}

const Calendar = ({ onChange, open}: CalendarProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  // Maneja la selección de la fecha
  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        {open  && (
          <>
            <Paper sx={{ width: 350, height: 400, padding: 2 }}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={selectedDate}
                onChange={handleDateChange}
                sx={{
                  fontFamily: 'SF Pro Display, sans-serif', // Aplica la fuente a todo el componente
                  '& .MuiButtonBase-root': {
                    backgroundColor: 'transparent', // Fondo transparente para los botones
                    color: '#1B2F3D', // Color de texto y números
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#579991', // Color para los íconos del DatePicker
                  },
                  '& .MuiPickersDay-root': {
                    color: '#1B2F3D', // Color de los días en el calendario
                    '&.Mui-selected': {
                      backgroundColor: '#DDECEA !important', // Fondo para el día seleccionado
                      color: '#579991', // Color de texto para el día seleccionado
                    },
                  },
                }}
              />
              <Button width='318px' onClick={() => {
                  onChange(selectedDate)
                }}>
                Confirmar
              </Button>
            </Paper>
          </>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
