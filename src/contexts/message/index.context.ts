import {createContext} from 'react';
import {MessageContextDto} from './index.dto';

export const MessageContext = createContext({} as MessageContextDto.Output);