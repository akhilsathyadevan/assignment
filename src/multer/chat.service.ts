// import { Injectable, BadRequestException } from '@nestjs/common';
// import { ChatDto } from './dtos/chat.dto'; // Define a DTO for validation
// import { plainToInstance } from 'class-transformer';
// import { validate } from 'class-validator';

// @Injectable()
// export class ChatService {
//   async importChatHistory(data: any[]): Promise<string> {
//     const chats = [];

//     for (const item of data) {
//       const chatDto = plainToInstance(ChatDto, item);
//             const errors = await validate(chatDto);
//       if (errors.length > 0) {
//         throw new BadRequestException('Invalid data format');
//       }

//       chats.push({
//         username: chatDto.username,
//         message: chatDto.message,
//         timestamp: chatDto.timestamp,
//       });
//     }

//     return 'Chat history successfully imported';
//   }
// }
