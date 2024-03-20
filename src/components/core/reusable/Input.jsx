import {
  Box,
  FormHelperText,
  InputBase,
  InputLabel,
  styled,
  Typography
} from '@mui/material';
import React, { memo } from 'react';

const Input = (props) => {
  return (
    <Box
      sx={{
        flex: 1,
        marginLeft: props.index && '1rem',
        ...props.layoutStyle,
        minWidth: '220px'
      }}
    >
      <FormGroup>
        <Label htmlFor={props.name}>
          <Typography
            variant='display1'
            sx={{ fontSize: '.8rem', fontWeight: 400 }}
            color='text.primary'
          >
            {props.label}
          </Typography>
        </Label>
        <StyledInput
          id={props.id || props.name}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          type={props.type}
          autoFocus={props.autoFocus}
          endAdornment={props.endIcon}
          onChange={props.onChange}
          onFocus={props.onFocus}
          inputProps={props.inputProps}
          centertext={`${props.centertext}`}
          disabled={props.disabled}
          onKeyDown={props.onKeyDown}
          multiline={props.multiline}
          rows={props.rows}
          style={{
            ...props.inputStyle
          }}
        />
      </FormGroup>
      <FormHelperText>
        <Typography color='error' component={'span'} sx={{ fontSize: '.7rem' }}>
          {props.helperText}
        </Typography>
      </FormHelperText>
    </Box>
  );
};

export default memo(Input);

const FormGroup = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  // border: `1px solid ${theme.palette.text.primary}`,
  position: 'relative',
  padding: theme.spacing(1),
  borderRadius: '8px',
  width: '100%',
  background: theme.palette.background.default
}));

const StyledInput = styled(InputBase)(({ theme, centertext }) => ({
  ...theme.typography.display3,
  color: theme.palette.primary.main,
  width: '100%',
  border: 'none',
  '&:focus': {
    outline: 'none'
  },
  '& .MuiInputBase-input': {
    textAlign: centertext === 'true' && 'center'
  },
  '& .Mui-disabled > input': {
    color: theme.palette.primary.main
  }
}));

const Label = styled(InputLabel)(({ theme }) => ({
  position: 'absolute',
  top: '-10px',
  left: '10px',
  backgroundColor: theme.palette.background.default,
  padding: '0 1rem',
  ...theme.typography.display1,
  color: theme.palette.text.primary,
  fontSize: '.8rem'
}));
