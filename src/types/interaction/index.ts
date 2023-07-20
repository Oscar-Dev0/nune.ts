import { APICommandAutocompleteInteractionResponseCallbackData, InteractionResponseType, RESTPostAPIApplicationCommandsJSONBody, RESTPostAPIApplicationCommandsResult } from "discord-api-types/v10";
import { MessageInteractionOptions } from "../message";
import { ModalBuilder } from "../../build";
import { Permissions } from "../base/permissions";
import { AddUndefinedToPossiblyUndefinedPropertiesOfInterface } from "discord-api-types/utils/internals"
import { InteractionCommands } from "./commnads";
import { ModalInteraction } from "./modal";











export type interactionResponse = 
{ type: InteractionResponseType.Pong } |
{ type: InteractionResponseType.ChannelMessageWithSource, data: MessageInteractionOptions } |
{ type: InteractionResponseType.DeferredChannelMessageWithSource, data?: Pick<MessageInteractionOptions, "flags"> } |
{ type: InteractionResponseType.DeferredMessageUpdate } |
{ type: InteractionResponseType.UpdateMessage , data?: MessageInteractionOptions } |
{ type: InteractionResponseType.ApplicationCommandAutocompleteResult, data: APICommandAutocompleteInteractionResponseCallbackData } |
{ type: InteractionResponseType.Modal, data: ModalBuilder };

export type interactionData = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<Omit<RESTPostAPIApplicationCommandsJSONBody, "default_member_permissions"> &
({ default_member_permissions: Permissions } |
{ default_member_permissions: Permissions[] })>;

export type interactionResult = RESTPostAPIApplicationCommandsResult;


export type Interaction = InteractionCommands | ModalInteraction;