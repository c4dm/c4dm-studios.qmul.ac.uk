<!-- cspell:ignore Audiotechnik Digicheck Digiface Disklavier dmXLAN Eigenmike IPMSW MADIFace ncat Netgear nmap tmws Totalmix usbdk Vicon -->
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

<!-- ### Download the latest versions of our TotalMix templates below!

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
<br/> -->

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

We operate a local access network across our studios, allowing for interaction and configuration with numerous hardware devices.
This network is accessible throughout the studios, and can be connected to via ethernet from various wall ports, or using several of our preconfigured devices.

<details>
<summary>How to LAN</summary>

At C4DM we support a local access network, connecting together and making accessible numerous devices throughout our facility.
This network has been preconfigured by our staff, so that all devices on our network may be easily accessed from within supported applications or a web browser.
Simply connect a computer to one of the many LAN ethernet ports labelled throughout our facility, or use one of the thunderbolt cables connected to an OWC dock, located at every studio desk / modular workstation.

Upon connecting to the LAN, you should have DHCP enabled in your network settings, and you will be assigned an IP within the range `192.168.0.101` - `192.168.0.254`.
All static pieces of hardware installed throughout our spaces have been given a fixed IP within the range `192.168.0.1` - `192.168.0.100`, with the total network size limited by the subnet mask `255.255.255.0`.
Our LAN is **not** connected to the internet in any way, and so all remote connections via this network are unavailable.

### MacOS

If you are running MacOS on a personal computer, you must manually [change the network order in your system settings](https://support.apple.com/en-gb/guide/mac-help/mchlp2711/26/mac/26) to maintain a simultaneous internet connection via WiFi.
If you are using our in house Mac Mini, all necessary network settings have been preconfigured, and you should contact staff if you encounter an issue with this machine.

</details>

<details>
<summary>File Sharing</summary>

Both the Windows PC in the Performance Lab and the Apple Mac Mini in the Control Room have been configured with a Samba server for file sharing.

Network attached storage ([NAS](https://en.wikipedia.org/wiki/Network-attached_storage)) and can be accessed with your using the student login credentials used across our computers.

To share files between a personal device and one of these machines, simply make sure both devices are connected over LAN, and navigate to the desired machine from your file manager.
Please note, **these folders are not to be viewed as permanent storage**, and may on occasion be purged without warning.

</details>

<details>
<summary>Device Address Book</summary>

This section acts as a reference for our network enabled devices, with all pieces of hardware listed here having been preconfigured by our staff.
Many of these device addresses are only accessible through software, and in the case of our network infrastructure, many of these devices are also password protected.
If you are facing an issue with one of these protected devices, please contact a member of staff.

### Plant Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.1 </td><td> TP Link - TL-R480T+ </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.2 </td><td> Extreme Networks - X440-G2-24P </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.3 </td><td> D-Link - DGS-3120-24PC </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.9 </td><td> Keene Electronics - IPMSW1 Plus </td></tr>
</tbody></table>

### Control Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.10 </td><td> Netgear - GS305E </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.11 </td><td> Apple - Mac Mini </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.12 </td><td> iConnectivity - mioXL </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.13 </td><td> dbx - DriverRack PA 2 </td></tr>
</tbody></table>

### Live Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.20 </td><td> Netgear - GS305E </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.21 </td><td> Keene Electronics - IPMSW1 Plus (Undercroft) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.22 </td><td> iConnectivity - mioXL </td></tr>
</tbody></table>

### Performance Lab

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.30 </td><td> Netgear - GS305E (Desk) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.31 </td><td> Netgear - GS305E (System Rack) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.32 </td><td> iConnectivity - mioXL </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.33 </td><td> d&b Audiotechnik - D20 </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.34 </td><td> ELC Lighting - dmXLAN node3 </td></tr>
</tbody></table>

</details>

# MIDI

Throughout our studios, we have integrated RTP-MIDI interfaces which allow for the remote connection of MIDI devices over LAN, supporting both modular session designs and experimental configurations.

<details>
<summary>Connecting a MIDI Device</summary>

We have installed the RTP-MIDI interface [mioXL by iConnectivity](https://www.iconnectivity.com/s/mio-X-Series-User-Guide-v20220503-g9g8.pdf) in each of our studio rooms, and all front ports of the devices have been preconfigured and made accessible.
The power for these devices is located in the Performance Lab stage rack, the Control Room main switch, and the Live Room system rack.
These accessible ports include:

![Picture of a mioXL by iConnectivity, showing the preconfigured MIDI ports](/images/documentation/midi-mioXL.png)

Upon connecting a MIDI device to one of these ports, these ports may be accessed over LAN by following the steps relevant to your computer's operating system.

### MacOS

To connect to an RTP-MIDI port on a MacOS computer, simply navigate to [the MIDI Network Settings within the Audio MIDI Setup application](https://support.apple.com/en-gb/guide/audio-midi-setup/ams1012/mac).
Here you should see a list of available devices and MIDI ports, labelled according to their room and function - simply create a `Session`, add the MIDI ports you wish to use by pressing `Connect`, add them to

![Audio MIDI Setup window, demonstrating how to activate an RTP-MIDI port](/images/documentation/midi-mac-settings.png)

[Connecting this device to Ableton Live](https://help.ableton.com/hc/en-us/articles/209071169-Setting-up-a-virtual-MIDI-network)

![Ableton Live window, demonstrating how to activate a MIDI device for input / output](/images/documentation/midi-ableton-mac.png)

### Windows

...coming soon...

<!-- [rtpMIDI by Tobias Erichsen](https://www.tobias-erichsen.de/software/rtpmidi.html) -->

</details>

<details>
<summary>Installed MIDI Devices</summary>

### Yamaha Disklavier

### Control Room Keyboard??

</details>

# Spatial Audio

In the Performance Lab, we operate a 16.2 hemispherical speaker array, and in the Live Room, we operate a 12.1 hemispherical speaker array.
These surround sound systems are largely used for research into spatial audio and immersive composition, and can be used alongside many contemporary technologies that perform spatial audio decoding and encoding.

<details>
<summary>Powering our Speaker Systems</summary>

For the most part, powering out speaker systems is controlled via UDP commands sent over the LAN.
If you are a Windows user, you will need to first install [nmap](https://nmap.org/download.html) to send commands via UDP.
And if you are unsure whether you are connected to the LAN correctly, make sure to `ping` any relevant IP addresses before sending any further commands.

<!-- (Is the IPSMW config password protected?) -->

### Performance Lab (16.2)

To power the d&b subwoofers, switch on the [d&b D20](https://www.dbaudio.com/global/en/products/amplifiers/d20/) located in the Performance Lab system rack, whilst the Meyer satellites can be powered on or off with the following terminal commands.

##### MacOS

```bash
echo -n "KMS ON2" | nc -u -w1 192.168.0.9 65432
echo -n "KMS OFF2" | nc -u -w1 192.168.0.9 65432
```

##### Windows

```powershell
echo|set /p="KMS ON2" | ncat -u -w1 192.168.0.9 65432
echo|set /p="KMS OFF2" | ncat -u -w1 192.168.0.9 65432
```

### Live Room (12.1)

Power for the Meyer subwoofer is located on the wall, whilst the Meyer satellites can be powered on or off with the following terminal commands.

##### MacOS

```bash
echo -n "KMS ON2" | nc -u -w1 192.168.0.21 65432
echo -n "KMS OFF2" | nc -u -w1 192.168.0.21 65432
```

##### Windows

```powershell
echo|set /p="KMS ON1" | ncat -u -w1 192.168.0.21 65432
echo|set /p="KMS OFF1" | ncat -u -w1 192.168.0.21 65432
```

</details>

<!--
## Cycling '74 Max

## Ableton Live

## Dolby Atmos

...coming soon...

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

If you are a Windows user, you will need to first install [nmap](https://nmap.org/download.html) to send commands via UDP.

power on commands - macos
```bash
$ echo -n "KMS ON1" | nc -u -w1 192.168.0.9 65432
$ echo -n "KMS OFF1" | nc -u -w1 192.168.0.9 65432
```
power on commands - windows
```powershell
$ echo|set /p="KMS ON1" | ncat -u -w1 192.168.0.9 65432
$ echo|set /p="KMS OFF1" | ncat -u -w1 192.168.0.9 65432
```

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

Within the Performance Lab, we have installed a series of stage lights that can be controlled using DMX over LAN.
The power for these lights is controlled using the labelled fuses in the Plant Room, whilst the power for the network hardware is located in the Performance Lab stage rack.

<details>
<summary>Our System</summary>

The stage lighting in the Performance Lab is connected to the LAN via a [dmXLAN node3 by ELC Lighting](https://www.elclighting.com/products/node3t), and can be controlled using the [dmXLAN](https://www.elclighting.com/software-products/dmxlan-v4) software.
The Windows computer at the back of the room has been preconfigured for ease of use, and once the software is opened, only the default template for the space needs to be loaded (either click 'yes' when prompted to load the most recent file, or `File > Open Recent`).
Similarly, if you wish to run this software from your own computer, simply install the dmXLAN software and download the Performance Lab template below.

<span>
	<a class='button' download href='/resources/dmx/Performance-Lab.dxl'>
		Performance Lab Template
	</a>
</span>

As a basic overview of the software, each light is defined as a virtually positioned **Fixture**, and has been made addressable as part of a single DMX universe.
These fixtures are controlled in the bottom right of the screen, where general brightness is controlled in the _Basic_ tab, whilst the rest of the controls are distributed across _Colour_, _Beam_, and _Extra_.
Multiple lights can be controlled simultaneously by selecting items from the **Groups** tab in the top left of the screen, and similarly presets can be stored and recalled via the **Scenes** tab.

![dmXLAN screenshot showing the Performance Lab template](/images/documentation/dmx-dmXLAN.png)

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

When using this fixture library with dmXLAN, you will need to manually set the library path, as in the preferences window pictured below.

![dmXLAN screenshot showing the Fixture Library path in preferences.](/images/documentation/dmx-fixture-library.png)

<!--
still to learn!
- time code (an alternative software to dmXLAN is needed for this)
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
