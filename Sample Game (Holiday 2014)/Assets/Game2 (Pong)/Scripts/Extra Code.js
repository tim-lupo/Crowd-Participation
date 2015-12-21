//using UnityEngine;
//using System.Collections;
//
//public class JoystickController : MonoBehaviour {
//	
//	/// <summary>
//	/// This is a joystick detect demo/project. Made by project Team Unity~ from the Entertainment Technology Center at Carnegie Mellon.
//	/// The purpose for this demo/project is to understand what is the mapping for you joystick. 
//	/// </summary>
//	
//	private string currentButton;
//	private string currentAxis;
//	private float axisInput;
//	
//	// Use this for initialization
//	void Start () {
//	
//	}
//	
//	// Update is called once per frame
//	void Update () 
//	{
//		getAxis();
//		getButton();
//		
//	
//	}
//	
//	/// <summary>
//	/// Get Axis data of the joysick
//	/// </summary>
//	void getAxis()
//	{
//		if(Input.GetAxisRaw("X axis")> 0.3|| Input.GetAxisRaw("X axis") < -0.3)
//		{
//			currentAxis = "X axis";
//			axisInput = Input.GetAxisRaw("X axis");
//		}
//		
//		if(Input.GetAxisRaw("Y axis")> 0.3|| Input.GetAxisRaw("Y axis") < -0.3)
//		{
//			currentAxis = "Y axis";
//			axisInput = Input.GetAxisRaw("Y axis");
//		}
//		
//		if(Input.GetAxisRaw("3rd axis")> 0.3|| Input.GetAxisRaw("3rd axis") < -0.3)
//		{
//			currentAxis = "3rd axis";
//			axisInput = Input.GetAxisRaw("3rd axis");
//		}
//		
//		if(Input.GetAxisRaw("4th axis")> 0.3|| Input.GetAxisRaw("4th axis") < -0.3)
//		{
//			currentAxis = "4th axis";
//			axisInput = Input.GetAxisRaw("4th axis");
//		}
//		
//		if(Input.GetAxisRaw("5th axis")> 0.3|| Input.GetAxisRaw("5th axis") < -0.3)
//		{
//			currentAxis = "5th axis";
//			axisInput = Input.GetAxisRaw("5th axis");
//		}
//		
//		if(Input.GetAxisRaw("6th axis")> 0.3|| Input.GetAxisRaw("6th axis") < -0.3)
//		{
//			currentAxis = "6th axis";
//			axisInput = Input.GetAxisRaw("6th axis");
//		}
//		
//		if(Input.GetAxisRaw("7th axis")> 0.3|| Input.GetAxisRaw("7th axis") < -0.3)
//		{
//			currentAxis = "7th axis";
//			axisInput = Input.GetAxisRaw("7th axis");
//		}
//		
//		if(Input.GetAxisRaw("8th axis") > 0.3|| Input.GetAxisRaw("8th axis") < -0.3)
//		{
//			currentAxis = "8th axis";
//			axisInput = Input.GetAxisRaw("8th axis");
//		}
//	}
//	
//	/// <summary>
//	/// get the button data of the joystick
//	/// </summary>
//	void getButton()
//	{
//		if(Input.GetButton("joystick button 0"))
//			currentButton = "joystick button 0";
//		   
//		if(Input.GetButton("joystick button 1"))
//			currentButton = "joystick button 1";
//		   
//		if(Input.GetButton("joystick button 2"))
//			currentButton = "joystick button 2";
//		   
//		if(Input.GetButton("joystick button 3"))
//			currentButton = "joystick button 3";
//		   
//		if(Input.GetButton("joystick button 4"))
//			currentButton = "joystick button 4";
//		   
//		if(Input.GetButton("joystick button 5"))
//			currentButton = "joystick button 5";
//		   
//		if(Input.GetButton("joystick button 6"))
//			currentButton = "joystick button 6";
//		   
//		if(Input.GetButton("joystick button 7"))
//			currentButton = "joystick button 7";
//		   
//		if(Input.GetButton("joystick button 8"))
//			currentButton = "joystick button 8";
//		   
//		if(Input.GetButton("joystick button 9"))
//			currentButton = "joystick button 9";
//		   
//		if(Input.GetButton("joystick button 10"))
//			currentButton = "joystick button 10";
//		   
//		if(Input.GetButton("joystick button 11"))
//			currentButton = "joystick button 11";
//		   
//		if(Input.GetButton("joystick button 12"))
//			currentButton = "joystick button 12";
//		   
//		if(Input.GetButton("joystick button 13"))
//			currentButton = "joystick button 13";
//		   
//		if(Input.GetButton("joystick button 14"))
//			currentButton = "joystick button 14";
//		
//		if(Input.GetButton("joystick button 15"))
//			currentButton = "joystick button 15";
//		
//		if(Input.GetButton("joystick button 16"))
//			currentButton = "joystick button 16";
//		
//		if(Input.GetButton("joystick button 17"))
//			currentButton = "joystick button 17";
//		
//		if(Input.GetButton("joystick button 18"))
//			currentButton = "joystick button 18";
//		
//		if(Input.GetButton("joystick button 19"))
//			currentButton = "joystick button 19";	   
//	}
//	
//	/// <summary>
//	/// show the data onGUI
//	/// </summary>
//	void OnGUI()
//	{
//		GUI.TextArea(new Rect(400, 100, 250, 50), "Current Button : " + currentButton);
//		GUI.TextArea(new Rect(400, 200, 250, 50), "Current Axis : " + currentAxis);
//		GUI.TextArea(new Rect(400, 300, 250, 50), "Axis Value : " +  axisInput);
//	}
//}




//	var orange= Random.Range (0, 2.01);
//	var purple= Random.Range (0, 2.01);
//	Debug.Log(orange);
//	Debug.Log(purple);
//	
//	var lang = ((orange+.01/purple+.01));
//	Debug.Log(lang);
//	
//	if ( lang > 1.9 )
//	{
//		transform.Translate(Vector2(0,10) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.9 && lang > 1.8 )
//	{
//		transform.Translate(Vector2(0,9) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.8 && lang > 1.7 )
//	{
//		transform.Translate(Vector2(0,8) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.7 && lang > 1.6 )
//	{
//		transform.Translate(Vector2(0,7) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.6 && lang > 1.5 )
//	{
//		transform.Translate(Vector2(0,6) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.5 && lang > 1.4 )
//	{
//		transform.Translate(Vector2(0,5) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.4 && lang > 1.3 )
//	{
//		transform.Translate(Vector2(0,4) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.3 && lang > 1.2 )
//	{
//		transform.Translate(Vector2(0,3) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.2 && lang > 1.1 )
//	{
//		transform.Translate(Vector2(0,2) * Time.deltaTime);
//	}
//	
//	if ( lang <= 1.1 && lang > 1 )
//	{
//		transform.Translate(Vector2(0,1) * Time.deltaTime);
//	}
//	
//	if ( lang == 1 )
//	{
//		transform.Translate(Vector2(0,0) * Time.deltaTime);
//	}
//
//	if ( lang < 1 && lang >= .9 )
//	{
//		transform.Translate(Vector2(0,-1) * Time.deltaTime);
//	}
//	
//	if ( lang < .9 && lang >= .8 )
//	{
//		transform.Translate(Vector2(0,-2) * Time.deltaTime);
//	}
//	
//	if ( lang < .8 && lang >= .7 )
//	{
//		transform.Translate(Vector2(0,-3) * Time.deltaTime);
//	}
//	
//	if ( lang < .7 && lang >= .6 )
//	{
//		transform.Translate(Vector2(0,-4) * Time.deltaTime);
//	}
//	
//	if ( lang < .6 && lang >= .5 )
//	{
//		transform.Translate(Vector2(0,-5) * Time.deltaTime);
//	}
//	
//	if ( lang < .5 && lang >= .4 )
//	{
//		transform.Translate(Vector2(0,-6) * Time.deltaTime);
//	}
//	
//	if ( lang < .4 && lang >= .3 )
//	{
//		transform.Translate(Vector2(0,-7) * Time.deltaTime);
//	}
//	
//	if ( lang < .3 && lang >= .2 )
//	{
//		transform.Translate(Vector2(0,-8) * Time.deltaTime);
//	}
//	
//	if ( lang < .2 && lang >= .1 )
//	{
//		transform.Translate(Vector2(0,-9) * Time.deltaTime);
//	}
//	
//	if ( lang < .1 && lang >= 0 )
//	{
//		transform.Translate(Vector2(0,-10) * Time.deltaTime);
//	}
