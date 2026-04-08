import { useState } from "react";
import { useParams } from "react-router-dom";
import useAddReview from "../../hooks/useAddReview";
import useProductDetails from "../../hooks/useProductDetails";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
  Stack,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";

export default function Review() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useProductDetails(id);
  const { mutate, isPending } = useAddReview(id);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        {error.message}
      </Alert>
    );

  const reviews = data?.response?.reviews;
  const product = data?.response;

  function handleSubmit(e) {
    e.preventDefault();
    mutate(
      { Rating: rating,
         Comment: comment 
        },
      {
        onSuccess: () => {
          setComment("");
          setRating(5);
        },
      },
    );
  }

  return (
    <Box maxWidth={1100} mx="auto" p={3}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
        >
          <Tab label="Description" />
          <Tab label="Additional Information" />
          <Tab label={`Reviews (${reviews?.length ?? 0})`} />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Box>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {product?.description}
          </Typography>
        </Box>
      )}

      {activeTab === 1 && (
        <Box>
          <Stack spacing={1.5}>
            <Stack direction="row" spacing={2}>
              <Typography fontWeight="bold" minWidth={120}>
                Price:
              </Typography>
              <Typography color="text.secondary">${product?.price}</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={2}>
              <Typography fontWeight="bold" minWidth={120}>
                Quantity:
              </Typography>
              <Typography color="text.secondary">
                {product?.quantity}
              </Typography>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={2}>
           </Stack>
          </Stack>
        </Box>
      )}

      {activeTab === 2 && (
        <Box>
          <Box>
            {reviews?.map((review, index) => (
              <Card key={index} sx={{ mb: 2, p: 2 }}>
                <Typography fontWeight="bold">{review.userName}</Typography>

                <Rating value={review.rating} readOnly size="small" />

                <Typography variant="caption" color="text.secondary">
                  {new Date(review.createdAt).toLocaleDateString()}
                </Typography>

                <Typography sx={{ mt: 1 }}>{review.comment}</Typography>
              </Card>
            ))}
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Add a Review
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Write your comment..."
              sx={{ my: 2 }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isPending}
              fullWidth
            >
              {isPending ? "Sending..." : "Submit"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
