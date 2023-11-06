import { Stack } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react'

function MuiPicker() {
  const [selectedDate, setSelectedDate] = useState<dateFns | null>(null);
  const [selectedTime, setSelecetedTime] = useState<dateFns | null>(null);

  console.log({selectedDate, selectedTime});

  return (
    <Stack spacing={4} m={4} sx={{ width: '250px' }}>
      {/* Date Picker component */}
      <DatePicker 
        label='Date Picker' 
        value={selectedDate} 
        onChange={(newValue) => setSelectedDate(newValue)} 
      />

      {/* TimePicker component */}
      <TimePicker 
        label='Time Picker'
        value={selectedTime}
        onChange={(newValue) => setSelecetedTime(newValue)}
      />
    </Stack>
  )
}

export default MuiPicker;