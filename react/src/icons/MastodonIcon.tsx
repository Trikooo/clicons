import React from 'react';
import config from '../config';

interface MastodonIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MastodonIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mastodon)
 * @see {@link https://clicons.dev/icon/mastodon}
 */
const MastodonIcon = React.forwardRef<SVGSVGElement, MastodonIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 13.5V8C17 6.61929 15.8807 5.5 14.5 5.5C13.1193 5.5 12 6.61929 12 8M12 8V11.5M12 8C12 6.61929 10.8807 5.5 9.5 5.5C8.11929 5.5 7 6.61929 7 8V13.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 16.9954C15.0099 16.9954 16.89 16.6876 18.4949 16.1525C20.1275 15.6081 21 13.9512 21 12.2302V7.52349C21 5.34784 19.8297 3.2779 17.7281 2.715C16.0259 2.25905 14.0744 2 12 2C9.9256 2 7.97414 2.25905 6.27189 2.715C4.17033 3.2779 3 5.34785 3 7.52349V14.4961C3 22.4937 11 21.9938 11 21.9938C13.5 21.9938 15 21 15 21V20C15 20 13.5 20.4943 11 20.4943C5.68009 20.4943 7.06011 15.9957 7.06011 15.9957C8.75781 16.627 10.8012 16.9954 13 16.9954Z'
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

MastodonIcon.displayName = 'MastodonIcon';
export default MastodonIcon;
