import { styled } from "styled-components";

const CampoTextoEstilizado = styled.input`
  border: 2px solid #53ACAF;
  border-radius: 8px;
  width: 260px;
  height: 25px;
  padding: 8px;
  background-color: #f5f5f5;
`;

const LabelEstilizado = styled.label`
  display: flex;
  border-bottom: 8px;
  margin-left: 4px;
  padding: 8px;
  color: ${(props) => props.color || "#f5f5f5"};

`;
const CampoTexto = (props) => {
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <div>
      <LabelEstilizado color={props.labelColor}>{props.label}</LabelEstilizado>
      <CampoTextoEstilizado
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={handleChange}
        color={props.color}
      />
    </div>

  );
};

export default CampoTexto;
