-- Create properties table
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  sqft INTEGER,
  images TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'Available' CHECK (status IN ('Available', 'Sold')),
  admin_id UUID REFERENCES auth.users(id)
);

-- Create inquiries table
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT,
  message TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for properties
CREATE POLICY "Public profiles are viewable by everyone" ON properties
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert their own properties" ON properties
  FOR INSERT WITH CHECK (auth.uid() = admin_id);

CREATE POLICY "Admins can update their own properties" ON properties
  FOR UPDATE USING (auth.uid() = admin_id);

-- Policies for inquiries
CREATE POLICY "Anyone can submit an inquiry" ON inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view inquiries for their properties" ON inquiries
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM properties 
      WHERE properties.id = inquiries.property_id 
      AND properties.admin_id = auth.uid()
    )
  );
