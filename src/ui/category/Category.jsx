import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Category({category}) {
  return (
    <Card
        sx={{
          marginTop:3,
          borderRadius: 3,
          textAlign: "center",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ mb: 1 }}
          >
            {category.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Explore products
          </Typography>
        </CardContent>
      </Card>
  )
}
