import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction='row' m={4}>
      {/* LoadingButtonn with loading=false */}
      <LoadingButton variant='outlined'>Submit</LoadingButton>

      {/* LoadingButtonn with loading=true */}
      <LoadingButton loading variant='outlined'>Submit</LoadingButton>

      {/* changing the text of loading state using loadingIndicator prop */}
      <LoadingButton loadingIndicator='Loading...' variant='outlined'>Fetch data</LoadingButton>
      <LoadingButton loadingIndicator='Loading...' loading variant='outlined'>Fetch data</LoadingButton>

      {/* by using loadingPosition prop to set the position of loader in LoadingButton component */}
      <LoadingButton 
        loadingPosition='start' 
        startIcon={<Save />}
        variant='outlined'
      >
        Fetch data
      </LoadingButton>

      <LoadingButton 
        loadingPosition='start' 
        startIcon={<Save />}
        loading
        variant='outlined'
      >
        Fetch data
      </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton;