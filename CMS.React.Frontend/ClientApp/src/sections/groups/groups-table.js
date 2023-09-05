import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  SvgIcon,
  IconButton
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { getInitials } from '../../utils/get-initials';
import EditIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import DeleteIcon from '@heroicons/react/24/solid/TrashIcon';
import ViewIcon from '@heroicons/react/24/solid/EyeIcon';

export const GroupTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;
  const handleEdit = (groupId) => {
    
  };
  const handleView = (groupId) => {
    
  };

  const handleDelete = (groupId) => {
    
  };
  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead style={{ backgroundColor : 'yellow' }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
               
                <TableCell>
                Group Name
                
                </TableCell>
               
                <TableCell>
                  ChairPerson
                </TableCell>
                <TableCell>
                 Treasurer
                </TableCell>
                <TableCell>
                 Secretary
                </TableCell>
                <TableCell>
                 Members
                </TableCell>
               
                <TableCell>
                  Action
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((group) => {
                const isSelected = selected.includes(group.id);
                

                return (
                  <TableRow
                    hover
                    key={group.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(group.id);
                          } else {
                            onDeselectOne?.(group.id);
                          }
                        }}
                      />
                    </TableCell>
                   
                    <TableCell>
                      {group.name}
                    </TableCell>
                    <TableCell>
                      {group.chairperson}
                    </TableCell>
                    <TableCell>
                    {group.treasurer}
                    </TableCell>
                    <TableCell>
                    {group.secretary}
                    </TableCell>
                    <TableCell>
                    {group.members}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                      <IconButton onClick={() => handleView(group.id)}>                         
                            <SvgIcon>
                               <ViewIcon style={{ color: 'black' }} />                  
                            </SvgIcon>                          
                        </IconButton>
                        <IconButton onClick={() => handleEdit(group.id)}>                         
                          <SvgIcon>
                                <EditIcon style={{ color: 'black' }}  />              
                            </SvgIcon> 
                        </IconButton>
                        <IconButton onClick={() => handleDelete(group.id)}>                         
                            <SvgIcon>
                               <DeleteIcon style={{ color: 'red' }} />                  
                            </SvgIcon>                          
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

GroupTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
