import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from "next/image";

const LatestNews = () => {
    return (
        <>
            <Box className="my-5">

                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={topNews} alt="top news" width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className=" w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className="my-3">
                                By Mohiuddin - Mar 18 2023
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="mt-5">
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className=" w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className="my-3">
                                        By Mohiuddin - Mar 18 2023
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className=" w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className="my-3">
                                        By Mohiuddin - Mar 18 2023
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className=" w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className="my-3">
                                        By Mohiuddin - Mar 18 2023
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="top news" width={800} />
                                </CardMedia>
                                <CardContent>
                                    <p className=" w-[100px] px-2 bg-red-500 text-white my-5 rounded">Technology</p>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className="my-3">
                                        By Mohiuddin - Mar 18 2023
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default LatestNews;