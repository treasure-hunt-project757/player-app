// Flutter web plugin registrant file.
//
// Generated file. Do not edit.
//

// @dart = 2.13
// ignore_for_file: type=lint

import 'package:audio_session/audio_session_web.dart';
import 'package:audioplayers_web/audioplayers_web.dart';
import 'package:camera_web/camera_web.dart';
import 'package:flutter_native_splash/flutter_native_splash_web.dart';
import 'package:just_audio_web/just_audio_web.dart';
import 'package:mobile_scanner/src/web/mobile_scanner_web.dart';
import 'package:permission_handler_html/permission_handler_html.dart';
import 'package:uni_links_web/uni_links_web.dart';
import 'package:video_player_web/video_player_web.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

void registerPlugins([final Registrar? pluginRegistrar]) {
  final Registrar registrar = pluginRegistrar ?? webPluginRegistrar;
  AudioSessionWeb.registerWith(registrar);
  AudioplayersPlugin.registerWith(registrar);
  CameraPlugin.registerWith(registrar);
  FlutterNativeSplashWeb.registerWith(registrar);
  JustAudioPlugin.registerWith(registrar);
  MobileScannerWeb.registerWith(registrar);
  WebPermissionHandler.registerWith(registrar);
  UniLinksPlugin.registerWith(registrar);
  VideoPlayerPlugin.registerWith(registrar);
  registrar.registerMessageHandler();
}
