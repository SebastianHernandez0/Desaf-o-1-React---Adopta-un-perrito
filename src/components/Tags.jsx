import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tags({texto,color}){
    return(
        <Stack direction="horizontal" gap={2} >
        <Badge style={{width:"80%", margin:"20px auto"}} bg={color}>{texto}</Badge>
        </Stack>
    )
}

export default Tags