import { Box, Typography, Avatar, Card, Divider, Stack } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material'; 
import useProfile from '../../hooks/useProfile';
import { useTranslation } from 'react-i18next';
import Loader from '../../ui/Loader/Loader';

export default function ProfileInfo() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;
  console.log(data);


  return (
    <Box sx={{ maxWidth: 500, mt: 4 }}>
      <Typography variant="h5" fontWeight="800" mb={3} sx={{ color: '#1a237e' }}>
        {t("My Profile Information")}
      </Typography>

      <Card 
        elevation={0} 
        sx={{ 
          p: 3, 
          borderRadius: 4, 
          border: '1px solid #eceff1',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          background: 'linear-gradient(to bottom, #ffffff, #fafafa)'
        }}
      >
        <Stack spacing={2.5}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Avatar 
              sx={{ 
                width: 65, 
                height: 65, 
                bgcolor: 'primary.main',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
              }}
            >
              {data.fullName?.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight="bold">{data.fullName}</Typography>
              <Typography variant="body2" color="text.secondary">{data.city}</Typography>
            </Box>
          </Box>

          <Divider />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Email fontSize="small" sx={{ color: 'primary.main' }} />
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">{t("Email")}</Typography>
              <Typography variant="body2" fontWeight="500">{data.email}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Phone fontSize="small" sx={{ color: 'primary.main' }} />
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">{t("Phone")}</Typography>
              <Typography variant="body2" fontWeight="500" dir="ltr">{data.phoneNumber}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOn fontSize="small" sx={{ color: 'primary.main' }} />
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">{t("City")}</Typography>
              <Typography variant="body2" fontWeight="500">{data.city}</Typography>
            </Box>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}