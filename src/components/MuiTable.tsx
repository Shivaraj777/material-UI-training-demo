import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

function MuiTable() {
  return (

    // Table component
    <TableContainer component={Paper} sx={{ marginTop: '25px', maxHeight: '300px' }}>
      <Table aria-label='simple-table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((row) => (
              <TableRow 
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0} }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [{
  "id": 1,
  "first_name": "Donica",
  "last_name": "Telling",
  "email": "dtelling0@ow.ly",
  "gender": "Female",
  "ip_address": "206.60.22.205"
}, {
  "id": 2,
  "first_name": "Blakeley",
  "last_name": "Witch",
  "email": "bwitch1@zdnet.com",
  "gender": "Female",
  "ip_address": "241.241.156.81"
}, {
  "id": 3,
  "first_name": "Bealle",
  "last_name": "Skea",
  "email": "bskea2@walmart.com",
  "gender": "Genderqueer",
  "ip_address": "51.200.175.134"
}, {
  "id": 4,
  "first_name": "Norry",
  "last_name": "Giron",
  "email": "ngiron3@reference.com",
  "gender": "Male",
  "ip_address": "52.68.186.143"
}, {
  "id": 5,
  "first_name": "Graehme",
  "last_name": "Cherrie",
  "email": "gcherrie4@unesco.org",
  "gender": "Male",
  "ip_address": "30.241.247.28"
}, {
  "id": 6,
  "first_name": "Bidget",
  "last_name": "Sings",
  "email": "bsings5@pcworld.com",
  "gender": "Female",
  "ip_address": "108.111.234.134"
}, {
  "id": 7,
  "first_name": "Bibbye",
  "last_name": "Verdie",
  "email": "bverdie6@mlb.com",
  "gender": "Female",
  "ip_address": "210.102.110.183"
}, {
  "id": 8,
  "first_name": "Cathlene",
  "last_name": "Rebillard",
  "email": "crebillard7@tiny.cc",
  "gender": "Female",
  "ip_address": "148.219.109.172"
}];

export default MuiTable;