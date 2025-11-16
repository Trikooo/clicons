import React from 'react';
import config from '../config';

interface PotionIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PotionIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/potion)
 * @see {@link https://clicons.dev/icon/potion}
 */
const PotionIcon = React.forwardRef<SVGSVGElement, PotionIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 15C13 16.3807 11.8807 17.5 10.5 17.5C9.11929 17.5 8 16.3807 8 15'
    }
  ],
  [
    'path',
    {
      d: 'M12.4609 4.98405C12.4771 4.82626 12.4804 4.66723 12.4705 4.50845L12.3476 2.53028C12.3264 2.18962 12.657 1.92903 12.9983 2.01736L17.6108 3.21118C17.9521 3.29951 18.1035 3.68484 17.9088 3.96964L16.7784 5.62342C16.6877 5.75616 16.6081 5.89545 16.5405 6.03991M12.4609 4.98405C12.4443 5.1461 12.414 5.30684 12.3702 5.46466L11.5176 8M12.4609 4.98405L11 4.60593M12.4609 4.98405L16.5405 6.03991M16.5405 6.03991C16.471 6.18829 16.414 6.34212 16.3702 6.49993L15.6587 9M16.5405 6.03991L18 6.41766'
    }
  ],
  [
    'path',
    {
      d: 'M5 15H19'
    }
  ],
  [
    'path',
    {
      d: 'M14.008 12L13.999 12'
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

PotionIcon.displayName = 'PotionIcon';
export default PotionIcon;
