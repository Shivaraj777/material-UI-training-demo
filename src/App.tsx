import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns }  from '@mui/x-date-pickers/AdapterDateFns';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
import MuiNavbar from './components/MuiNavbar';
// import MuiLink from './components/MuiLink';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadge from './components/MuiBadge';
// import MuiList from './components/MuiList';
// import MuiChip from './components/MuiChip';
// import MuiToolTip from './components/MuiToolTip';
// import MuiTable from './components/MuiTable';
// import MuiAlert from './components/MuiAlert';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiDialog from './components/MuiDialog';
// import MuiProgress from './components/MuiProgress';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiPicker from './components/MuiPicker';
// import MuiTab from './components/MuiTab';
// import MuiTimeline from './components/MuiTimeline';
// import MuiMasonry from './components/MuiMasonry';
import MuiResponsiveness from './components/MuiResponsiveness';
// import MuiTypography from './components/MuiTypography';
// import MuiButton from './components/MuiButton';
// import MuiTextfield from './components/MuiTextfield';
// import MuiSelect from './components/MuiSelect';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRatings from './MuiRatings';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiLayout from './components/MuiLayout';
// import MuiCard from './components/MuiCard';

// creating a theme
const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      dark: colors.grey[700]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <div className="App">
          <MuiNavbar />
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextfield /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRatings /> */}
          {/* <MuiAutoComplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiToolTip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiTab /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
          {/* <MuiBottomNavigation /> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
