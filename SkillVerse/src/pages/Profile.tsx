import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Brain, 
  Camera, 
  Shield, 
  Bell, 
  Palette,
  Globe,
  Save,
  Upload
} from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Passionate about learning programming and exploring AI technologies.",
    avatar: "",
    emotionConsent: true,
    notifications: {
      email: true,
      push: true,
      learning: true,
      achievements: true
    },
    preferences: {
      darkMode: true,
      language: "en",
      autoplay: false,
      animations: true
    }
  });

  const handleSave = () => {
    console.log("Saving profile:", profile);
    // Handle save logic here
  };

  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account and learning preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="card-glow p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <User className="h-6 w-6 mr-2" />
                Profile Information
              </h2>
              
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button onClick={handleSave} variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card className="card-glow p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                Privacy & Security
              </h2>
              
              <div className="space-y-6">
                {/* Emotion Detection */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Emotion Detection</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow the platform to analyze your facial expressions for personalized learning
                    </p>
                  </div>
                  <Switch
                    checked={profile.emotionConsent}
                    onCheckedChange={(checked) => 
                      setProfile({...profile, emotionConsent: checked})
                    }
                  />
                </div>

                {/* Camera Access */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Camera className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Camera Access</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enable camera access for real-time emotion analysis during lessons
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                {/* Data Usage */}
                <div className="space-y-4">
                  <h3 className="font-medium">Data Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline">
                      Download My Data
                    </Button>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>

                <Button onClick={handleSave} variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Privacy Settings
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="card-glow p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Bell className="h-6 w-6 mr-2" />
                Notification Settings
              </h2>
              
              <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Email Notifications</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive course updates and achievement notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={profile.notifications.email}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        notifications: {...profile.notifications, email: checked}
                      })
                    }
                  />
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Push Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant notifications for important updates
                    </p>
                  </div>
                  <Switch
                    checked={profile.notifications.push}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        notifications: {...profile.notifications, push: checked}
                      })
                    }
                  />
                </div>

                {/* Learning Reminders */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Learning Reminders</h3>
                    <p className="text-sm text-muted-foreground">
                      Daily reminders to continue your learning streak
                    </p>
                  </div>
                  <Switch
                    checked={profile.notifications.learning}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        notifications: {...profile.notifications, learning: checked}
                      })
                    }
                  />
                </div>

                {/* Achievement Notifications */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Achievement Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Celebrate your progress with achievement alerts
                    </p>
                  </div>
                  <Switch
                    checked={profile.notifications.achievements}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        notifications: {...profile.notifications, achievements: checked}
                      })
                    }
                  />
                </div>

                <Button onClick={handleSave} variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card className="card-glow p-6">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Palette className="h-6 w-6 mr-2" />
                Learning Preferences
              </h2>
              
              <div className="space-y-6">
                {/* Theme */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-muted-foreground">
                      Use dark theme for better focus during coding sessions
                    </p>
                  </div>
                  <Switch
                    checked={profile.preferences.darkMode}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        preferences: {...profile.preferences, darkMode: checked}
                      })
                    }
                  />
                </div>

                {/* Language */}
                <div className="space-y-2">
                  <Label htmlFor="language">Interface Language</Label>
                  <select 
                    id="language"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    value={profile.preferences.language}
                    onChange={(e) => setProfile({
                      ...profile, 
                      preferences: {...profile.preferences, language: e.target.value}
                    })}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                  </select>
                </div>

                {/* Autoplay */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Autoplay Videos</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically play lesson videos when you start a module
                    </p>
                  </div>
                  <Switch
                    checked={profile.preferences.autoplay}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        preferences: {...profile.preferences, autoplay: checked}
                      })
                    }
                  />
                </div>

                {/* Animations */}
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="space-y-1">
                    <h3 className="font-medium">Animations</h3>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth animations and transitions throughout the app
                    </p>
                  </div>
                  <Switch
                    checked={profile.preferences.animations}
                    onCheckedChange={(checked) => 
                      setProfile({
                        ...profile, 
                        preferences: {...profile.preferences, animations: checked}
                      })
                    }
                  />
                </div>

                <Button onClick={handleSave} variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;