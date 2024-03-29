import { Card, CardContent, Typography, CardMedia, CardHeader } from "@mui/material";

function NationCard({name, imgURL, description, id}){

    return(
        <>
{/*         <div className="flex flex-col self-start border-2 rounded-md border-black mt-2 p-2">
                <div className="img">
                    <img src={imgURL} alt="bandiera" />
                </div>
                <div className="title&desc bg-zinc-400 rounded-b-lg">
                    <h2>Nome nazione: {name}</h2>
                    <p>Descrizione: {description}</p>
                    <p>ID: {id}</p>
                </div>
            </div> */}

            <Card>
                <CardHeader
                title={name}/>
                <CardMedia
                    component="img"
                    image={imgURL}
                    alt="bandiera"/>
                    <CardContent>
                        <Typography>
                            Descrizione: {description}
                        </Typography>
                        <Typography>
                            ID: {id}
                        </Typography>
                    </CardContent>
            </Card>
        </>
    );
}
export default NationCard;