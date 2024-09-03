import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../../api/api';

const ProfileEdit = () => {
    const [profile, setProfile] = useState({ name: '', email: '', profileImage: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await getProfile();
            setProfile(data);
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        // Handle image upload logic here
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(profile);
        alert('Profile updated successfully');
    };

    return (
        <div className="container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profileImage">Profile Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="profileImage"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default ProfileEdit;
