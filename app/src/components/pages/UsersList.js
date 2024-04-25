import React from 'react'
import DataTable from 'react-data-table-component';
import { Badge, Button } from 'reactstrap';
import { FaTrash, FaRegEdit} from "react-icons/fa";
const UsersList = (props) => {
    
  const columns = [
    {
      name: <h6>Name</h6>,
      selector: (row) => row.name,
    },
    {
      name: <h6>Gender</h6>,
      selector: (row) => row.gender,
    },
    {
      name: <h6>DOB</h6>,
      selector: (row) => row.dob,
    },
    {
      name: <h6>Mobile</h6>,
      selector: (row) => row.mobile,
    },
    {
      name: <h6>Email</h6>,
      selector: (row) => row.email,
    },
    {
      name: <h6>User Name</h6>,
      selector: (row) => row.user_name,
    },
    {
      name: <h6>Password</h6>,
      selector: (row) => row.password,
    },
    {
      name: <h6>Hobbies</h6>,
      selector: (row) => row.hobbies,
    },
    {
      name: <h6>State</h6>,
      selector: (row) => row.state,
    },
    {
      name: <h6>District</h6>,
      selector: (row) => row.district,
    },
    {
      name: <h6>City</h6>,
      selector: (row) => row.city,
    },
    {
      name: <h6>Profile Picture</h6>,
      selector: (row) => row.profile,
    },
    {
      name: <h6>Document</h6>,
      selector: (row) => row.fileDoc,
    },
    {
        name: <h4>Status</h4>,
        selector: (row) => row.status,
        cell: (row) => (
            <Badge color={`outline-${row.status === true ? "success" : "danger"}`}>
                {row.status === true ? "Active" : "InActive"}
            </Badge>
        ),
        sortable: true,
    },
    {
      name: <h6>Action</h6>,
      cell: (row) => (
        <>
          <Button outline color={`warning`} className={`me-2`}>
            <FaRegEdit/>
          </Button>
          <Button outline color={`danger`}  >
            <FaTrash />
          </Button>
        </>
      ),

    },
  ];
    return (
        <> 
           <div className={`row`}>
                      
                            <DataTable
                                // data={props.data}
                                columns={columns}
                                pagination
                               subHeader={false}
                                persistTableHead
                                onColumnOrderChange
                                striped={true}
                                responsive={true}
                               
                            />
                       
                    </div>
         
        </>
    )
}

export default UsersList;