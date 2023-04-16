import styled from '@emotion/styled';
import { container, transition } from 'helpers';
import { Button } from 'components/Styled';

import { mediaSizes } from 'constants/media';
import { colors } from 'constants';

export const ButtonCalc = styled(Button)`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 210px;
    margin-left: 320px;
  }
`;

export const CalculatorStyled = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 100px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 100px;
    align-items: flex-start;
  }
  @media screen and (min-width: ${mediaSizes.deskop}) {
    width: 608px;
    padding-top: 153px;
    padding-left: 13px;
  }

  h2 {
    width: 280px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: ${colors.color4};
    text-align: left;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 554px;
      font-size: 34px;
      font-weight: 700;
      line-height: 1.41;
    }
    @media screen and (min-width: ${mediaSizes.deskop}) {
      width: 608px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 34px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 68px;
  }
`;
export const FormWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 60px;
    flex-direction: row;
    gap: 30px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 40px;
  }
`;

export const Input = styled.input`
  height: 24px;
  width: 240px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid ${colors.color3};
  color: ${colors.color2};
  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 37px;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.color2};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.21;
    letter-spacing: 0.04em;
    text-align: left;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding-bottom: 20px;
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
`;
export const RadioTitle = styled.div`
  margin-bottom: 8px;
  padding-bottom: 20px;
  font-size: 14px;
  text-align: left;
  font-weight: 700;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${colors.color2};
  border-bottom: 1px solid ${colors.color3};
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.color3};
  }
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  color: ${colors.color2};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
    color: ${colors.color1};
  }
  &:focus-within {
    font-weight: 700;
    color: ${colors.color1};
  }
`;
export const RadioInput = styled.input`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 22px;
  height: 22px;
  align-items: center;
  appearance: none;
  background-color: #fff;
  color: ${colors.color1};
  border: 1px solid ${colors.color3};
  border-radius: 50%;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);

    ${transition('transform')};
    box-shadow: inset 10px 10px ${colors.color1};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
    outline: 1px solid ${colors.color3};
  }
`;


// <div className={css.form}>
//              <input
//               class="in" 
//               type="email"
//               name="email"
//               autocomplete="off"
//               required
//               value={fields.name}
//               onChange={handleInputChange}
//             />
//             <label for="text" className={css.labelName}>
//               <span className={css.contentName}>Your Text</span>
//             </label>
//           </div>

// .form {
//   width: 100%;
//   position: relative;
//   height: 40px;
//   color: #9B9FAA;
//   overflow: hidden;
// }

// .form input {
//   width: 100%;
//   height: 100%;
//   color: #9B9FAA;
//   padding-top: 20px;
//   border: none;
//   background-color: #fff;
  
// }
// .form label {
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   border-bottom: 1px solid white;
// }
// .form label::after {
//   content: "";
//   position: absolute;
//   bottom: -1px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
//   border-bottom: 1px solid rgba(224, 224, 224, 1);
//   transition: all 0.3s ease;
// }

// .contentName {
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   padding-bottom: 5px;
//   transition: all 0.3s ease;
//   font-size: 14px;
// }
// .form input:focus {
//   outline: none;
// }
// .form input:focus + .labelName .contentName,
// .form input:valid + .labelName .contentName {
//   transform: translateY(-100%);
//   font-size: 10px;
//   left: 0px;
//   color: #9B9FAA;
// }