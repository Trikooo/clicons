import React from 'react';
import config from '../config';

interface CodesandboxIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CodesandboxIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/codesandbox)
 * @see {@link https://clicons.dev/icon/codesandbox}
 */
const CodesandboxIcon = React.forwardRef<SVGSVGElement, CodesandboxIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.8453 2.47782C11.4088 2.15927 11.6906 2 12 2C12.3094 2 12.5912 2.15927 13.1547 2.47782L19.8453 6.25983C20.4088 6.57838 20.6906 6.73766 20.8453 7C21 7.26234 21 7.58089 21 8.21799V15.782C21 16.4191 21 16.7377 20.8453 17C20.6906 17.2623 20.4088 17.4216 19.8453 17.7402L13.1547 21.5222C12.5912 21.8407 12.3094 22 12 22C11.6906 22 11.4088 21.8407 10.8453 21.5222L4.1547 17.7402C3.59117 17.4216 3.3094 17.2623 3.1547 17C3 16.7377 3 16.4191 3 15.782V8.21799C3 7.58089 3 7.26234 3.1547 7C3.3094 6.73766 3.59117 6.57838 4.1547 6.25983L10.8453 2.47782Z'
    }
  ],
  [
    'path',
    {
      d: 'M15.5 4.27051L13.134 5.55062C12.5803 5.85019 12.3035 5.99998 12 5.99998C11.6965 5.99998 11.4197 5.85019 10.866 5.55062L8.5 4.27051'
    }
  ],
  [
    'path',
    {
      d: 'M12 11.6154V22M12 11.6154L20.5 7M12 11.6154L3.5 7'
    }
  ],
  [
    'path',
    {
      d: 'M3 12L5.89443 13.5585C6.43234 13.8482 6.7013 13.993 6.85065 14.2532C7 14.5135 7 14.8373 7 15.485V19'
    }
  ],
  [
    'path',
    {
      d: 'M21 12L18.1056 13.5585C17.5677 13.8482 17.2987 13.993 17.1493 14.2532C17 14.5135 17 14.8373 17 15.485V19'
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

CodesandboxIcon.displayName = 'CodesandboxIcon';
export default CodesandboxIcon;
