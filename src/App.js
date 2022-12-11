import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';
import githubIcon from './assets/github.svg';

const styles = {
  root: {
    width: '50%',
    marginTop: 3,
    overflowX: 'auto',
    margin: '5% auto',
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    margin: '5% auto',
    fontSize: '2rem',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  }

}

function createData(name, description, deploymentDate, githubUrl, deploymentUrl, status) {
  return { name, description, deploymentDate, githubUrl, deploymentUrl, status };
}

const rows = [
  createData('Project 1', 'A description of project 1', 'January 1, 2020', 'https://github.com/user/project1', 'https://project1.com', 'Deployed'),
  createData('Project 2', 'A description of project 2', 'February 15, 2020', 'https://github.com/user/project2', 'https://project2.com', 'In Development'),
  createData('Project 3', 'A description of project 3', 'March 1, 2020', 'https://github.com/user/project3', 'https://project3.com', 'Cancelled'),
];

function App() {
  return (
    <>
      <Typography sx={styles.header}>
        Projects
      </Typography>


      <Paper sx={styles.root}>
        <Table sx={styles.table}>
          <TableHead>
            <TableRow sx={styles.tableRow}>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Deployment Date</TableCell>
              <TableCell>GitHub Url</TableCell>
              <TableCell>Deployment Url</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name} sx={styles.tableCell}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.deploymentDate}</TableCell>
                <TableCell sx={styles.tableCell}>
                  <img src={githubIcon} alt='github icon' href="https://portal-demo.mharikmert.dev" />
                </TableCell>
                <TableCell>{row.deploymentUrl}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default App;
