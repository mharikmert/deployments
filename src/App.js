import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { CheckCircleOutlineOutlined, CancelOutlined } from '@mui/icons-material';
import githubIcon from './assets/github.svg';
import projects from './projects.json'

const styles = {
  root: {
    width: '80%',
    margin: 'auto',
    minWidth: 750,
  },
  tableCell: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    margin: '2% auto',
    fontSize: '2rem',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  },
  tableHead: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  status: {
    up: {
      color: 'green',
    },
    down: {
      color: 'red',
    }
  },
}

const rowHeaders = ['Name', 'Description', 'Tech Stack', 'Github', 'Url', 'Status'];

function App() {
  const projectsWithStatus = projects.map(project => {
    return { ...project, status: <CheckCircleOutlineOutlined sx={styles.status.up} /> }
  })

  return (
    <>
      <Typography sx={styles.header}>
        Deployments
      </Typography>


      <Paper sx={styles.root}>
        <Table>
          <TableHead>
            <TableRow sx={styles.tableRow}>

              {rowHeaders.map(header => (
                <TableCell sx={styles.tableHead}>
                  {header}
                </TableCell>
              ))}

            </TableRow>
          </TableHead>
          <TableBody>
            {projectsWithStatus.map(row => (
              <TableRow key={row.name}>
                {
                  Object.keys(row).map(value => (
                    <TableCell sx={styles.tableCell}>
                      {
                        value === 'githubUrl' ? <a href={row[value]}><img src={githubIcon} alt="github icon" /></a>
                          :
                          value === 'deploymentUrl' ? <a href={row[value]} sx={styles.link}> {row[value]}</a>
                            :
                            row[value]
                      }

                    </TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default App;
