import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ImageGalery } from "../components/";

export const NoteView = () => {
	const { active } = useSelector((state) => state.journal);
	const { title, body, date, id } = active;

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ mb: 2 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					{new Date(date).toLocaleDateString()}
				</Typography>
			</Grid>

			<Grid item>
				<Button color="primary" sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un titulo"
					label={title ? "" : "Titulo"}
					sx={{ border: "none", mb: 1 }}
					value={title}
				/>

				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="Que sucedio hoy?"
					label={body ? "" : "Detalles"}
					minRows={5}
					value={body}
				/>
			</Grid>

			<ImageGalery />
		</Grid>
	);
};
