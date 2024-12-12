/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'

export default function LabCard({
  labNum,
  labName,
  numOfFunctional,
  numOfNotWorking,
}) {
  return (
    <Card
      sx={{
        backgroundColor: '#f7f7f7',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        padding: 2,
        textAlign: 'center',
      }}>
      <CardContent>
        <Typography variant="h6">Laboratory {labNum}</Typography>
        <Typography
          sx={{
            marginBottom: 2,
          }}>{labName}
        </Typography>
        <Stack direction="row" gap={4}>
          <Box>
            <Typography>FUNCTIONAL</Typography>
            <Typography>{numOfFunctional}</Typography>
          </Box>
          <Box>
            <Typography>NOT WORKING</Typography>
            <Typography>{numOfNotWorking}</Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
      <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            sx={{
            backgroundColor: 'white',
            color: 'black',
            padding: '3px 8px',
            fontSize: '0.8rem',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
            }}>
              View in Table
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
