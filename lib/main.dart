import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:device_preview/device_preview.dart';
import 'package:flutter/services.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

void main() {
  final app = DevicePreview(
    builder: (_) => const MainApp(),
  );

  runApp(app);
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Color-O-Meter",
      theme: ThemeData(
        scaffoldBackgroundColor: Colors.white70,
        appBarTheme: const AppBarTheme(
          color: Colors.tealAccent,
        ),
        textTheme: const TextTheme(
          bodyLarge: TextStyle(
            fontWeight: FontWeight.bold,
          ),
          bodyMedium: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final ValueNotifier<Color> _color = ValueNotifier(Colors.yellowAccent);
  late final _controller = TextEditingController(text: _color.value.toHex());

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final width = size.width;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Color To Swift",
          style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
        ),
      ),
      body: ValueListenableBuilder(
        valueListenable: _color,
        builder: (context, color, _) {
          return SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.only(top: 18.0),
              child: Column(
                children: [
                  ColorPicker(
                    pickerColor: color,
                    onColorChanged: (newColor) {
                      _color.value = newColor;
                    },
                    displayThumbColor: true,
                    labelTypes: const [ColorLabelType.rgb],
                    colorPickerWidth: width * 0.9,
                    hexInputBar: true,
                    hexInputController: _controller,
                    portraitOnly: true,
                  ),
                  CupertinoButton.filled(
                    child: SizedBox(
                      width: width / 2 - 20,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text("\"${color.toSwiftColor()}\""),
                          const Icon(Icons.copy),
                        ],
                      ),
                    ),
                    onPressed: () async {
                      final data = ClipboardData(
                        text: color.toSwiftColor(),
                      );
                      await Clipboard.setData(data);
                    },
                  )
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

extension SwiftColor on Color {
  String toSwiftColor() {
    return "Color(red: $red/255, green: $green/255, blue: $blue/255)";
  }
}

extension HexColor on Color {
  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) => '${leadingHashSign ? '#' : ''}'
      '${alpha.toRadixString(16).padLeft(2, '0')}'
      '${red.toRadixString(16).padLeft(2, '0')}'
      '${green.toRadixString(16).padLeft(2, '0')}'
      '${blue.toRadixString(16).padLeft(2, '0')}';
}
