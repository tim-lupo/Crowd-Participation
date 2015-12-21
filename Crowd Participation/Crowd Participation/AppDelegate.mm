#import "AppDelegate.h"
#include <iostream>
#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include <ApplicationServices/ApplicationServices.h>

@interface AppDelegate ()

@property (weak) IBOutlet NSWindow *window;
@end

@implementation AppDelegate

- (void)awakeFromNib {
    statusItem = [[NSStatusBar systemStatusBar] statusItemWithLength:NSVariableStatusItemLength];
    NSBundle *bundle = [NSBundle mainBundle];
    statusImage = [[NSImage alloc] initWithContentsOfFile:[bundle pathForResource:@"Icon1" ofType:@"png"]];
    statusHighlightImage = [[NSImage alloc] initWithContentsOfFile:[bundle pathForResource:@"Icon2" ofType:@"png"]];
    [statusItem setImage:statusImage];
    [statusItem setAlternateImage:statusHighlightImage];
    [statusItem setMenu:statusMenu];
    [statusItem setHighlightMode:YES];
}

- (IBAction) play:(id)sender {
    
    using namespace cv;
    using namespace std;
    
    VideoCapture cap(0); //capture the video from webcam
    
    if ( !cap.isOpened() )  // if not success, exit program
    {
        cout << "Cannot open the web cam" << endl;
    }
    
    CGEventRef wtrue, wfalse, strue, sfalse, etrue, efalse, dtrue, dfalse, mtrue, mfalse, ntrue, nfalse;
    wtrue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)13, true);
    wfalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)13, false);
    strue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)1, true);
    sfalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)1, false);
    etrue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)14, true);
    efalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)14, false);
    dtrue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)2, true);
    dfalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)2, false);
    mtrue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)46, true);
    mfalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)46, false);
    ntrue = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)45, true);
    nfalse = CGEventCreateKeyboardEvent(NULL, (CGKeyCode)45, false);
    
    int RedLowH = (self.RLH);
    int RedHighH = (self.RHH);
    int RedLowS = (self.RLS);
    int RedHighS = (self.RHH);
    int RedLowV = (self.RLV);
    int RedHighV = (self.RHV);
    int GreenLowH = (self.GLH);
    int GreenHighH = (self.GHH);
    int GreenLowS = (self.GLS);
    int GreenHighS = (self.GHS);
    int GreenLowV = (self.GLV);
    int GreenHighV = (self.GHV);
    int time = 0;
    
    while (true) {
        
        Mat image;
        cap.read(image);
        Mat HSV;
        Mat leftgreenimg;
        Mat leftredimg;
        Mat rightgreenimg;
        Mat rightredimg;
        Mat leftanal;
        Mat rightanal;
        Mat audience;
        time += 1;
        
        if (time % 60 == 0){
            cout << "Red Hue-" << RedLowH << " " << RedHighH;
            cout << "Red Saturation-" << RedLowS << " " << RedHighS;
            cout << "Red Value-" << RedLowV << " " << RedHighV;
            cout << "Green Hue-" << GreenLowH << " " << GreenHighH;
            cout << "Green Saturation-" << GreenLowS << " " << GreenHighS;
            cout << "Green Value-" << GreenLowV << " " << GreenHighV;
        }
        
        //Left Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftanal);
        int left = countNonZero(leftgreenimg);
        waitKey(10);
        
        //Right Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightanal);
        int right = countNonZero(rightanal);
        waitKey(10);
        
        if (left > right){
            CGEventPost(kCGSessionEventTap, mfalse);
            CGEventPost(kCGSessionEventTap, ntrue);
        }
        else if (left < right){
            CGEventPost(kCGSessionEventTap, nfalse);
            CGEventPost(kCGSessionEventTap, mtrue);
        }
        else {
            CGEventPost(kCGSessionEventTap, mfalse);
            CGEventPost(kCGSessionEventTap, nfalse);
        }
        
        
        
        //Left Cropping
        Mat leftimg = image(cv::Rect(0, 0, 640, 720));
        waitKey(10);
        
        //Left Green Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftgreenimg);
        int leftgreen = countNonZero(leftgreenimg);
        waitKey(10);
        
        //Left Red Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),leftredimg);
        int leftred = countNonZero(leftredimg);
        waitKey(10);
        
        if (leftgreen > leftred){
            CGEventPost(kCGSessionEventTap, sfalse);
            CGEventPost(kCGSessionEventTap, wtrue);
        }
        else if (leftgreen < leftred){
            CGEventPost(kCGSessionEventTap, wfalse);
            CGEventPost(kCGSessionEventTap, strue);
        }
        else {
            CGEventPost(kCGSessionEventTap, wfalse);
            CGEventPost(kCGSessionEventTap, sfalse);
        }
        
        
        
        //Right Cropping
        Mat rightimg = image(cv::Rect(640, 0, 640, 720));
        waitKey(10);
        
        //Right Green Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightgreenimg);
        int rightgreen = countNonZero(rightgreenimg);
        waitKey(10);
        
        //Right Red Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),rightredimg);
        int rightred = countNonZero(rightredimg);
        waitKey(10);
        
        if (rightgreen > rightred){
            CGEventPost(kCGSessionEventTap, dfalse);
            CGEventPost(kCGSessionEventTap, etrue);
        }
        else if (rightgreen < rightred){
            CGEventPost(kCGSessionEventTap, efalse);
            CGEventPost(kCGSessionEventTap, dtrue);
        }
        else {
            CGEventPost(kCGSessionEventTap, efalse);
            CGEventPost(kCGSessionEventTap, dfalse);
        }
        
        imshow("Audience", image);
        waitKey(10);
        
    }
}

- (IBAction) calibrate:(id)sender {
    
    using namespace cv;
    using namespace std;
    
    VideoCapture cap(0); //capture the video from webcam
    
    if ( !cap.isOpened() )  // if not success, exit program
    {
        cout << "Cannot open the web cam" << endl;
    }
    
    namedWindow("HSVLeftGreen", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVLeftRed", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVRightGreen", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVRightRed", CV_WINDOW_AUTOSIZE);
    namedWindow("RedControl", CV_WINDOW_AUTOSIZE);
    namedWindow("GreenControl", CV_WINDOW_AUTOSIZE);
    namedWindow("LeftWindow", CV_WINDOW_AUTOSIZE);
    namedWindow("RightWindow", CV_WINDOW_AUTOSIZE);
    
    int RedLowH = 0;
    int RedHighH = 179;
    int RedLowS = 0;
    int RedHighS = 255;
    int RedLowV = 0;
    int RedHighV = 255;
    int GreenLowH = 0;
    int GreenHighH = 179;
    int GreenLowS = 0;
    int GreenHighS = 255;
    int GreenLowV = 0;
    int GreenHighV = 255;
    
    cv::createTrackbar("Red Low H", "RedControl", &RedLowH, 179);
    cv::createTrackbar("Red High H", "RedControl", &RedHighH, 179);
    cv::createTrackbar("Red Low S", "RedControl", &RedLowS, 255);
    cv::createTrackbar("Red High S", "RedControl", &RedHighS, 255);
    cv::createTrackbar("Red Low V", "RedControl", &RedLowV, 255);
    cv::createTrackbar("Red High V", "RedControl", &RedHighV, 255);
    cv::createTrackbar("Green Low H", "GreenControl", &GreenLowH, 179);
    cv::createTrackbar("Green High H", "GreenControl", &GreenHighH, 179);
    cv::createTrackbar("Green Low S", "GreenControl", &GreenLowS, 255);
    cv::createTrackbar("Green High S", "GreenControl", &GreenHighS, 255);
    cv::createTrackbar("Green Low V", "GreenControl", &GreenLowV, 255);
    cv::createTrackbar("Green High V", "GreenControl", &GreenHighV, 255);
    
    while (true) {
        
        self.RLH = RedLowH;
        self.RHH = RedHighH;
        self.RLS = RedLowS;
        self.RHS = RedHighS;
        self.RLV = RedLowV;
        self.RHV = RedHighV;
        self.GLH = GreenLowH;
        self.GHH = GreenHighH;
        self.GLS = GreenLowS;
        self.GHS = GreenHighS;
        self.GLV = GreenLowV;
        self.GHV = GreenHighV;
        
        Mat image;
        cap.read(image);
        Mat HSV;
        Mat leftgreenimg;
        Mat leftredimg;
        Mat rightgreenimg;
        Mat rightredimg;
        Mat leftanal;
        Mat rightanal;
        Mat audience;
        
        //Left Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftanal);
        int left = countNonZero(leftgreenimg);
        imshow("LeftWindow",leftanal);
        waitKey(10);
        
        //Right Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightanal);
        int right = countNonZero(rightanal);
        imshow("RightWindow",rightanal);
        waitKey(10);
        
        
        //Left Cropping
        Mat leftimg = image(cv::Rect(0, 0, 640, 720));
        waitKey(10);
        
        //Left Green Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftgreenimg);
        int leftgreen = countNonZero(leftgreenimg);
        imshow("HSVLeftGreen",leftgreenimg);
        waitKey(10);
        
        //Left Red Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),leftredimg);
        int leftred = countNonZero(leftredimg);
        imshow("HSVLeftRed",leftredimg);
        waitKey(10);
        
        //Right Cropping
        Mat rightimg = image(cv::Rect(640, 0, 640, 720));
        waitKey(10);
        
        //Right Green Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightgreenimg);
        int rightgreen = countNonZero(rightgreenimg);
        imshow("HSVRightGreen",rightgreenimg);
        waitKey(10);
        
        //Right Red Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),rightredimg);
        int rightred = countNonZero(rightredimg);
        imshow("HSVRightRed",rightredimg);
        waitKey(10);
    }
}

- (IBAction) develop:(id)sender {
    using namespace cv;
    using namespace std;
    
    VideoCapture cap(0); //capture the video from webcam
    
    if ( !cap.isOpened() )  // if not success, exit program
    {
        cout << "Cannot open the web cam" << endl;
    }
    
    namedWindow("HSVLeftGreen", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVLeftRed", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVRightGreen", CV_WINDOW_AUTOSIZE);
    namedWindow("HSVRightRed", CV_WINDOW_AUTOSIZE);
    namedWindow("RedControl", CV_WINDOW_AUTOSIZE);
    namedWindow("GreenControl", CV_WINDOW_AUTOSIZE);
    
    int RedLowH = 0;
    int RedHighH = 179;
    int RedLowS = 0;
    int RedHighS = 255;
    int RedLowV = 0;
    int RedHighV = 255;
    int GreenLowH = 0;
    int GreenHighH = 179;
    int GreenLowS = 0;
    int GreenHighS = 255;
    int GreenLowV = 0;
    int GreenHighV = 255;
    
    cv::createTrackbar("Red Low H", "RedControl", &RedLowH, 179);
    cv::createTrackbar("Red High H", "RedControl", &RedHighH, 179);
    cv::createTrackbar("Red Low S", "RedControl", &RedLowS, 255);
    cv::createTrackbar("Red High S", "RedControl", &RedHighS, 255);
    cv::createTrackbar("Red Low V", "RedControl", &RedLowV, 255);
    cv::createTrackbar("Red High V", "RedControl", &RedHighV, 255);
    cv::createTrackbar("Green Low H", "GreenControl", &GreenLowH, 179);
    cv::createTrackbar("Green High H", "GreenControl", &GreenHighH, 179);
    cv::createTrackbar("Green Low S", "GreenControl", &GreenLowS, 255);
    cv::createTrackbar("Green High S", "GreenControl", &GreenHighS, 255);
    cv::createTrackbar("Green Low V", "GreenControl", &GreenLowV, 255);
    cv::createTrackbar("Green High V", "GreenControl", &GreenHighV, 255);
    
    int time = 0;
    
    while (true) {
        
        Mat image;
        cap.read(image);
        Mat HSV;
        Mat leftgreenimg;
        Mat leftredimg;
        Mat rightgreenimg;
        Mat rightredimg;
        Mat leftanal;
        Mat rightanal;
        Mat audience;
        time += 1;
        
        if (time % 60 == 0){
            cout << "Red Hue-" << RedLowH << " " << RedHighH;
            cout << "Red Saturation-" << RedLowS << " " << RedHighS;
            cout << "Red Value-" << RedLowV << " " << RedHighV;
            cout << "Green Hue-" << GreenLowH << " " << GreenHighH;
            cout << "Green Saturation-" << GreenLowS << " " << GreenHighS;
            cout << "Green Value-" << GreenLowV << " " << GreenHighV;
        }
        
        //Left Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftanal);
        int left = countNonZero(leftgreenimg);
        imshow("LeftWindow",leftanal);
        waitKey(10);
        
        //Right Detection
        cvtColor(image,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightanal);
        int right = countNonZero(rightanal);
        imshow("RightWindow",rightanal);
        waitKey(10);
        
        //Left Cropping
        Mat leftimg = image(cv::Rect(0, 0, 640, 720));
        imshow("LeftWindow", leftimg);
        waitKey(10);
        
        //Left Green Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),leftgreenimg);
        int leftgreen = countNonZero(leftgreenimg);
        imshow("HSVLeftGreen",leftgreenimg);
        waitKey(10);
        
        //Left Red Detection
        cvtColor(leftimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),leftredimg);
        int leftred = countNonZero(leftredimg);
        imshow("HSVLeftRed",leftredimg);
        waitKey(10);
        
        
        //Right Cropping
        Mat rightimg = image(cv::Rect(640, 0, 640, 720));
        //imshow("RightWindow", rightimg);
        waitKey(10);
        
        //Right Green Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(GreenLowH, GreenLowS, GreenLowV),Scalar(GreenHighH, GreenHighS, GreenHighV),rightgreenimg);
        int rightgreen = countNonZero(rightgreenimg);
        imshow("HSVRightGreen",rightgreenimg);
        waitKey(10);
        
        //Right Red Detection
        cvtColor(rightimg,HSV,CV_BGR2HSV);
        inRange(HSV,Scalar(RedLowH, RedLowS, RedLowV),Scalar(RedHighH, RedHighS, RedHighV),rightredimg);
        int rightred = countNonZero(rightredimg);
        imshow("HSVRightRed",rightredimg);
        waitKey(10);
    }
}

@end
