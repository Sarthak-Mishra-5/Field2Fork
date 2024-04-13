import 'package:flutter/material.dart';

class homePage extends StatefulWidget {
  const homePage({super.key});

  @override
  State<homePage> createState() => _homePageState();
}

class _homePageState extends State<homePage> {
  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;
    final double height = screenSize.height;
    final double width = screenSize.width;

    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: SingleChildScrollView(
          child: Container(
            padding: EdgeInsets.all(20.0),
            height: height * 0.72,
            width: width * 0.65,
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.black,
                width: width * 0.002,
              ),
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Crop Predictor',
                  style: TextStyle(
                    fontSize: height * 0.025,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  ' Predict the Crop best for you',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    color: Colors.black,
                  ),
                ),
                SizedBox(height: height * 0.03),
                Text(
                  'Nitrogen',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                Text(
                  'This is the value of Nitrogen in the soil.',
                  style: TextStyle(
                    fontSize: height * 0.012,
                  ),
                ),
                SizedBox(height: height * 0.02),
                Text(
                  'Phosphorous',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                Text(
                  'This is the value of Phosphorus in the soil.',
                  style: TextStyle(
                    fontSize: height * 0.012,
                  ),
                ),
                SizedBox(height: height * 0.015),
                Text(
                  'Temperature',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                SizedBox(height: height * 0.02),
                Text(
                  'Humidity',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                SizedBox(height: height * 0.02),
                Text(
                  'pH',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                SizedBox(height: height * 0.02),
                Text(
                  'Rainfall',
                  style: TextStyle(
                    fontSize: height * 0.015,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: height * 0.04,
                  child: TextFormField(
                    decoration: const InputDecoration(
                      hintText: "0",
                      hintStyle: TextStyle(color: Colors.black38),
                      border: OutlineInputBorder(),
                      contentPadding: EdgeInsets.all(8.0),
                    ),
                    validator: (value) {
                      if (value == null || double.tryParse(value) == null) {
                        return 'Please enter a valid number.';
                      }
                      return null;
                    },
                  ),
                ),
                SizedBox(height: height * 0.025,),
                TextButton(
                  onPressed: () {},
                  child: Text(
                    'Next Step ➜',
                    style: TextStyle(
                      fontSize: height * 0.02,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
