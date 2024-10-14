import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
    UseGuards,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';
  // import { ChatService } from './chat.service';
  import * as XLSX from 'xlsx';
  
  @Controller('chat')
  export class ChatController {
    // constructor(private readonly chatService: ChatService) {}
  
    @Post('import')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    async importChat(@UploadedFile() file: any) {
      if (!file) {
        throw new BadRequestException('File is required!');
      }
  
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
    }
  }
  