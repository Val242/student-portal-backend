import { createParamDecorator, ExecutionContext, ForbiddenException } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.user) {
      throw new ForbiddenException('User not authenticated');
    }

    return request.user;
  },
);


// createParamDecorator: A factory function provided by NestJS to create custom decorators that can be used as parameters in controllers.
//ExceutionContext: Gives access to the current request/response cycle (works with HTTP, WebSocket, RPC, etc.).