import {
  HangingProtocolService,
  CustomizationService,
  MeasurementService,
  ViewportGridService,
  StateSyncService,
} from '../services';

/**
 * The interface for the services object
 */
export default interface Services {
  hangingProtocolService: HangingProtocolService;
  customizationService: CustomizationService;
  measurementService: MeasurementService;
  DisplaySetService: Record<string, unknown>;
  CineService: Record<string, unknown>;
  ToolBarService: Record<string, unknown>;
  CornerstoneViewportService: Record<string, unknown>;
  UIDialogService: Record<string, unknown>;
  ToolGroupService: Record<string, unknown>;
  UINotificationService: Record<string, unknown>;
  viewportGridService: ViewportGridService;
  stateSyncService: StateSyncService;
  SyncGroupService: Record<string, unknown>;
  CornerstoneCacheService: Record<string, unknown>;
}
