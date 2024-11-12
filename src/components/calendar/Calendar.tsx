import * as React from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { Paper } from '@mui/material';

interface CalendarProps {
  onChange: (date: Dayjs | null) => void; // Callback cuando se selecciona una fecha
  open: boolean; // Condición que determina si el DatePicker está visible
}

const Calendar = ({ onChange, open }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  // Maneja la selección de la fecha
  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    onChange(date); // Llamar al callback con la fecha seleccionada
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        {open && (
          <Paper sx={{ width: 350, height: 355, padding: 2 }}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={selectedDate}
              onChange={handleDateChange}
              sx={{
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
                    backgroundColor: '#DDECEA', // Fondo para el día seleccionado
                    color: '#579991', // Color de texto para el día seleccionado
                  },
                },
              }}
            />
          </Paper>
        )}
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
