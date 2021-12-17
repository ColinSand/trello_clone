import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Button } from "@mui/material";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const CardDeleteButton = styled.button`
  float: left;
  margin-right: 10px;
`;

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {/* provided is a required prop for react-beautiful-dnd */}
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              {/* possibly switch over to the Material UI button */}
              {/* <Button style={{ float: "left" }}>X</Button> */}
              <CardDeleteButton>X</CardDeleteButton>

              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
