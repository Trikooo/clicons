import React from 'react';
import config from '../config';

interface GoogleHomeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GoogleHomeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/google-home)
 * @see {@link https://clicons.dev/icon/google-home}
 */
const GoogleHomeIcon = React.forwardRef<SVGSVGElement, GoogleHomeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M22 11.2703C22 16.6439 17.5228 21 12 21C6.47715 21 2 16.6439 2 11.2703C2 8.76656 2.97195 6.48373 4.56875 4.75948C5.01425 4.27842 5.237 4.03789 5.88434 3.71276C6.53168 3.38764 6.98784 3.33859 7.90016 3.24048C9.0225 3.11979 10.5114 3 12 3C13.4886 3 14.9775 3.11979 16.0998 3.24048C17.0122 3.33859 17.4683 3.38764 18.1157 3.71276C18.763 4.03789 18.9857 4.27842 19.4313 4.75948C21.0281 6.48373 22 8.76656 22 11.2703Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 4C18 5.10457 15.3137 6 12 6C8.68629 6 6 5.10457 6 4'
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

GoogleHomeIcon.displayName = 'GoogleHomeIcon';
export default GoogleHomeIcon;
