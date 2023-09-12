import React, { useState, useEffect } from 'react';
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

export const EventTable = (props) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
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
  const handleEdit = (eventId) => {
    
  };
  const handleView = (eventId) => {
    
  };

  const handleDelete = (eventId) => {
    
  };
  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  useEffect(() => {
    // Initialize the expanded descriptions state
    const initialExpandedDescriptions = {};
    items.forEach((event) => {
      initialExpandedDescriptions[event.id] = false;
    });
    setExpandedDescriptions(initialExpandedDescriptions);
  }, [items]);

  // Function to toggle the description expansion
  const toggleDescriptionExpansion = (eventId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId],
    }));
  };
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
                Event Title
                
                </TableCell>
               
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                 Time
                </TableCell>
                <TableCell>
                 Event Venue
                </TableCell>
                <TableCell>
                Status
                </TableCell>
               
                <TableCell>
                  Action
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((event) => {
                const isSelected = selected.includes(event.id);
                const isDescriptionExpanded = expandedDescriptions[event.id];
                

                return (
                  <TableRow
                    hover
                    key={event.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(event.id);
                          } else {
                            onDeselectOne?.(event.id);
                          }
                        }}
                      />
                    </TableCell>
                   
                    <TableCell>
                      {event.name}
                    </TableCell>
                    <TableCell>
                      {/* Render truncated description with "Read More" link */}
                      {event.description.length > 100 ? (
                        isDescriptionExpanded ? (
                          <>
                            {event.description}
                            <span
                              style={{ cursor: 'pointer', color: 'blue' }}
                              onClick={() => toggleDescriptionExpansion(event.id)}
                            >
                              Collapse
                            </span>
                          </>
                        ) : (
                          <>
                            {event.description.slice(0, 100)} {/* Adjust the character limit */}
                            <span
                              style={{ cursor: 'pointer', color: 'blue' }}
                              onClick={() => toggleDescriptionExpansion(event.id)}
                            >
                              Read More
                            </span>
                          </>
                        )
                      ) : (
                        event.description // If not long enough for truncation, display as-is
                      )}
                    </TableCell>
                    <TableCell>
                    {event.date}
                    </TableCell>
                    <TableCell>
                    {event.time}
                    </TableCell>
                    <TableCell>
                    {event.venue}
                    </TableCell>
                    <TableCell
                     style={{
                      backgroundColor:
                        event.status === 'Cancelled'
                          ? 'red'
                          : event.status === 'Coming Up'
                          ? '#0096FF'
                          : '#50C878',
                      color: 'white', // Text color (white by default)
                    }}>
                      {event.status}
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

EventTable.propTypes = {
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
