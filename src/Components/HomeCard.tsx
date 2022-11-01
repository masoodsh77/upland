import { Card, CardContent, Typography } from "@mui/material";

interface IHomeCard {
  item: any;
}

const HomeCard = (props: IHomeCard) => {
  const { item } = props;
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.status}
        </Typography>
        <Typography variant="h5" component="div">
          {item.owner}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.full_address}
        </Typography>
        <Typography variant="body2">
          {item.price} {item.currency}
        </Typography>
        <button type="button" className="cbnMFh">
          Load more Detaile
        </button>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
