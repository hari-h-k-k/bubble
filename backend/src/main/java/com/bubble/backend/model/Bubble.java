package com.bubble.backend.model;

import java.util.Arrays;

public class Bubble {
    private int id;
    private String name;
    private int strength;

    private int owner;

    private String location;
    private String propertyType;
    private int[] ageGroup;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public int[] getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(int[] ageGroup) {
        this.ageGroup = ageGroup;
    }

    public int getOwner() {
        return owner;
    }

    public void setOwner(int owner) {
        this.owner = owner;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Bubble{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", strength=" + strength +
                ", propertyType='" + propertyType + '\'' +
                ", ageGroup=" + Arrays.toString(ageGroup) +
                '}';
    }


}
