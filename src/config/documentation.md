<!-- cspell:ignore Digicheck Digiface Disklavier dmXLAN Eigenmike MADIFace tmws Totalmix usbdk Vicon -->
<div class='markdown'> <!-- for applying scss styling -->

**All members should read sections 1-3 for a general understanding on how our studios work. Sections 4 and onwards cover specific equipment and use cases.**

# Overview

<details>
<summary>Power On/Off Procedures</summary>
</details>

<details>
<summary>Movement around the Studios</summary>
</details>

<details>
<summary>How to Use Sharepoint</summary>
</details>

<details>
<summary>Our Computers</summary>

We have two desktop computers that are pre-configured for a range of studio tasks...

Members who require certain admin privileges to carry out their work on our machines can request this via email.

### Student Login Credentials

Username: student

Password: student

### Saving Your Work

It will be deleted...

</details>

# Audio Network (AVB)

We operate an integrated audio network across our studios spaces, spanning 128 input and output channels distributed throughout.

### Download the latest versions of our TotalMix templates below!

<span>
	<a class='button' download href='/resources/Performance Lab (24263718).tmws'>
		Performance Lab Template
	</a>
	<a class='button' download href='/resources/Control Room (24251471).tmws'>
		Control Room Template
	</a>
	<a class='button' download href='/resources/Live Room (24261706).tmws'>
		Live Room Template
	</a>
</span>
<br/>

<details>
<summary>RME Audio Driver</summary>

To use our audio system with your own computer, you will need to install the following:

- RME DriverKit for Digiface AVB

- RME Network Driver (Windows Only)

- RME Connector

**Download**

1. Go to [https://rme-audio.de/downloads.html](https://rme-audio.de/downloads.html)

1. Select Digiface AVB from the left menu, followed by your operating system

1. Download the latest driver _(driver_usbdk_mac_xxx.zip, driver_madiface_win_xxx.zip)_

1. Windows Only: Download the RME Windows Network Driver _(driver_win_net_xxx.zip)_

1. Refresh and select RME Connector from the menu on the right

1. Download the latest version of RME Connector for your operating system

_Optional: Download RME Digicheck NG for studio-wide Real-Time Analyser (RTA)_

**Install**

- macOS: [https://rme-audio.de/rme-macos.html](https://rme-audio.de/rme-macos.html)

- Windows: [https://rme-audio.de/rme-macos.html](https://rme-audio.de/rme-macos.html)

</details>

<details>
<summary>Configure</summary>
</details>

<details>
<summary>Troubleshoot</summary>
</details>

# Local Access Network (LAN)

System Overview

<details>
<summary>How to LAN</summary>
</details>

<details>
<summary>File Sharing</summary>
</details>

<details>
<summary>Other Uses</summary>
</details>

<!-- <!-- # MIDI

## System Overview

## RTP-MIDI

# Spatial Audio

## System Overview

## Downloads

## Configuration

# Motion Capture

## System Overview

Vicon Bonita 10 optical camera system with 12 cameras.

## Software & Research Applications

We have licenses for Blade, Nexus and Tracker.

- **Blade 3:** For animation projects.

- **Nexus 2:** For life sciences.

- **Tracker 2:** For simple object tracking.

- **Datastream SDK:** A free developer kit to send/receive live motion data with OSC(?).

## Equipment List

- **12 x** Vicon Bonita 10 Optical Cameras

- **2 x** Vicon Bonita 720C Video Cameras

- **1 x** Vicon Lock+

## How to Motion Capture

### Basic Operation

1. Login with student credentials. _(See Student Credentials)_

2. Run _~/Desktop/Vicon Control.exe_ and click **_"Turn On Vicon"_**.

3. Wait for cameras to turn on. They will blink red when ready to connect.

4. Open your software of choice (Nexus, Blade, Tracker).

5. Click **_Connect_** and check status. If connected successfully, the cameras will turn solid red and be visible in the your software's live view - click **_Go Live_**.

6. Place a marker within the capture volume. If you can see the marker on screen, the system is working and you can continue with the resources below.

7. If you cannot see the marker, see **_Troubleshooting: Motion Capture_**

8. When you are finished, please run ~/Desktop/Vicon Control.exe and click **_"Turn Off Vicon"._**

### Calibration

#### Session Calibration

##### Masking

#### System Calibration

### Advanced: Streaming Motion Capture Data

### Advanced: Syncing Capture Start/Stop with UDP

- MaxForLive: Start/Stop Transport with Vicon
- MaxForLive: Rename last recorded clip to 'Capture Name'

### Advanced: Adding Analog Devices

- Vicon Lock+
- Weidmuller Connectors **8**

Bottom row channels: 1-32

Top row channels: 33-64

Each connector allows for up to 8 channels. The top row of the connector is GND.

### Advanced: Timecode, Genlock & Video Sync

### Advanced: Bonita 720C Video Cameras

## Vicon Tutorials & Other Resources

-->

# DMX Lighting

Within the Performance Lab, we have installed a series of stage lights that can be controlled using DMX over our LAN network.

<details>
<summary>Our System</summary>

The stage lighting in the Performance Lab is connected to the LAN via a [dmXLAN node3 by ELC](https://www.elclighting.com/products/node3t), and can be controlled using the [dmXLAN](https://www.elclighting.com/software-products/dmxlan-v4) software.
The Windows computer at the back of the room has been preconfigured for ease of use, and once the software is opened, only the default template for the space needs to be loaded (either click 'yes' when prompted to load the most recent file, or `File > Open Recent`).
Similarly, if you wish to run this software from your own computer, simply install the dmXLAN software and download the Performance Lab template below.

<span>
	<a class='button' download href='/resources/Performance-Lab.dxl'>
	Performance Lab Template
	</a>
</span>

As a basic overview of the software, each light is defined as a virtually positioned **Fixture**, and has been made addressable as part of a single DMX universe.
These fixtures are controlled in the bottom right of the screen, where general brightness is controlled in the _Basic_ tab, whilst the rest of the controls are distributed across _Colour_, _Beam_, and _Extra_.
Multiple lights can be controlled simultaneously by selecting items from the **Groups** tab in the top left of the screen, and similarly presets can be stored and recalled via the **Scenes** tab.

Add a screenshot!

</details>

<details>
<summary>Advanced</summary>

If you wish to experiment with other lighting designs, such as those using floor lighting, or lights for special effect, our custom Fixture Library can be downloaded below.
This library contains all of our most common lighting equipment, and can be used either alongside the dmXLAN software, or ported to another piece of DMX compatible software.

<span>
	<a class='button' download href='/resources/dmx/C4DM-Fixture-Library.zip'>
		C4DM Fixture Library
	</a>
</span>

<!--
still to learn!
- time code
- max msp
-->

</details>

<!--

# Misc Research Equipment

## GRAS Acoustics: Kemar Head

## mh Acoustics: EM64 Eigenmike

https://eigenmike.com/downloads

## Meyer Sound: Speaker Line Array

## Prism Sound: dScope III Signal Analyser

## Zoom H8: Multi-channel / B-Format Field Recorder

## TSL B-Format Microphone...

# Other Equipment (by Studio Room)

## G2B Performance Lab

### Yamaha: Disklavier Upright

### d&b audiotechnik: PA System

## G2C Control Room

### Camera Feeds

### Talkback System

## G4 Live Room

### Yamaha Mixer & RCF PA System

# Troubleshooting

## Troubleshooting: Audio

## Troubleshooting: LAN

## Troubleshooting: Spatial Audio

## Troubleshooting: Motion Capture

## Troubleshooting: GRAS Acoustics

## Troubleshooting: EM64 Eigenmike -->

</div> <!-- for applying scss styling -->
