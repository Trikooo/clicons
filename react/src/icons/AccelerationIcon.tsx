import React from 'react';
import config from '../config';

interface AccelerationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AccelerationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/acceleration)
 * @see {@link https://clicons.dev/icon/acceleration}
 */
const AccelerationIcon = React.forwardRef<SVGSVGElement, AccelerationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.49805 18.4138V11.1909C2.49805 9.86228 2.49805 9.19798 3.09674 9.03265C3.69542 8.86733 4.40002 9.33706 5.80922 10.2765L18.5832 18.7926C19.9924 19.732 20.697 20.2018 20.449 20.6009C20.201 21 19.2046 21 17.2117 21H6.37733C4.54862 21 3.63426 21 3.06616 20.6213C2.49805 20.2425 2.49805 19.633 2.49805 18.4138Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.49805 11C10.7072 11 12.498 9.20914 12.498 7C12.498 4.79086 10.7072 3 8.49805 3C6.28891 3 4.49805 4.79086 4.49805 7C4.49805 9.20914 6.28891 11 8.49805 11Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.502 9.996L21.4055 13.38M21.4055 13.38C21.7255 13.0406 21.1848 12.06 20.7283 10.728M21.4055 13.38C21.1848 13.62 20.4639 13.68 18.7639 13.998'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AccelerationIcon.displayName = 'AccelerationIcon';
export default AccelerationIcon;
