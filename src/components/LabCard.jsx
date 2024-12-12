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
    <Card sx={{ textAlign: 'center' }}>
      <CardContent>
        <Typography>Laboratory {labNum}</Typography>
        <Typography>{labName}</Typography>
        <Stack direction="row" gap={2}>
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
        <Button>View in Table</Button>
      </CardActions>
    </Card>
  )
}
