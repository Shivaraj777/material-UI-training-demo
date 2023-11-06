import './App.css';
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
import MuiPicker from './components/MuiPicker';
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

function App() {
  return (
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
        <MuiPicker />
        {/* <MuiBottomNavigation /> */}
      </div>
    </LocalizationProvider>
  );
}

export default App;
