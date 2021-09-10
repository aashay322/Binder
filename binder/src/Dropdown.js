import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const items = [
    {
      label: 'CS 8',
      value:'CS 8',
    }, 
  {
      label: 'CS 16',
      value:'CS 16',
  },
  {
      label: 'CS 32',
      value:'CS 32',
  },
  {
      label: 'CS 40',
      value:'CS 40',
  },
  {
    label: 'Math 4A',
    value:'Math 4A',
},

{
    label: 'Math 4B',
    value:'Math 4B',
},

{
    label: 'Math 6A',
    value:'Math 6A',
},

{
    label: 'Math 6B',
    value:'Math 6B',
},

{
    label: 'Phys 1',
    value:'Phys 1',
},

{
    label: 'Phys 2',
    value:'Phys 2',
},
{
    label: 'Phys 3',
    value:'Phys 3',
},
{
    label: 'Phys 4',
    value:'Phys 4',
},
{
    label: 'Phys 5',
    value:'Phys 5',
},  
  ];

function Dropdown() {
  return (
    <div>
        <div className="dd-wrapper">
        <Select
        options={items}
      />
        <div className = "title">
            <Link to="/cards">
            <button>
                <h1>Submit</h1>
                </button>
            </Link>
            </div>
        </div>
    </div>
  );
}

export default Dropdown;